export const paths = ['/', '/atendimento/', '/sobre/', '/perguntas-frequentes/', '/privacidade/', '/termos/', '/criacao-de-sites/', '/landing-pages/', '/portfolio/alvorada/', '/portfolio/advocacia-digital/', '/portfolio/odontohub/'];
export const publicPaths = [...paths, ...paths.map(p => `/en${p}`)];
// Add only reviewed campaigns; never copy arbitrary query values to an event.
export const campaigns = [];
export const TTL = 30 * 60 * 1000;
const hosts = { 'google.com': 'google', 'google.com.br': 'google', 'bing.com': 'bing', 'instagram.com': 'instagram', 'facebook.com': 'facebook', 'linkedin.com': 'linkedin', 'chatgpt.com': 'chatgpt', 'perplexity.ai': 'perplexity' };
const internal = ['digitalsd.com.br', 'www.digitalsd.com.br', 'digitals-d-website.pages.dev', 'localhost', '127.0.0.1'];
const match = (host, base) => host === base || host.endsWith(`.${base}`);
const unknown = () => ({ source: 'unknown', medium: 'unknown', attribution_basis: 'unavailable' });
export const internalHost = host => internal.includes(host) || host.endsWith('.digitals-d-website.pages.dev');

export function classify(url, referrer, approved = campaigns) {
  try {
    const current = new URL(url);
    const ref = referrer ? new URL(referrer) : null;
    if (ref && (internalHost(ref.hostname) || ref.origin === current.origin)) return unknown();
    const names = ['utm_source', 'utm_medium', 'utm_campaign'];
    const candidate = names.map(k => current.searchParams.getAll(k));
    const campaign = approved.find(c => candidate.every((v, i) => v.length === 1 && v[0] === c.tags[i]));
    if (campaign) return { source: campaign.source, medium: campaign.medium, attribution_basis: 'approved_campaign', campaign_id: campaign.id };
    if (!ref) return { source: 'direct_or_unknown', medium: 'none_or_unknown', attribution_basis: 'no_referrer' };
    if (!['http:', 'https:'].includes(ref.protocol)) return unknown();
    const source = Object.entries(hosts).find(([base]) => match(ref.hostname, base))?.[1] || 'other_external';
    return { source, medium: ['google', 'bing'].includes(source) ? 'search_unclassified' : ['chatgpt', 'perplexity'].includes(source) ? 'ai_referral' : 'referral', attribution_basis: 'external_referrer' };
  } catch { return unknown(); }
}

const pairs = { google: ['search_unclassified'], bing: ['search_unclassified'], instagram: ['referral'], facebook: ['referral'], linkedin: ['referral'], chatgpt: ['ai_referral'], perplexity: ['ai_referral'], other_external: ['referral'], direct_or_unknown: ['none_or_unknown'], unknown: ['unknown'] };
export function validAttribution(a) {
  if (!a || typeof a !== 'object' || Array.isArray(a)) return false;
  if (![a.source, a.medium, a.attribution_basis].every(v => typeof v === 'string')) return false;
  if (a.attribution_basis === 'approved_campaign') return campaigns.some(c => a.campaign_id === c.id && a.source === c.source && a.medium === c.medium);
  return !a.campaign_id && Object.hasOwn(pairs, a.source) && pairs[a.source].includes(a.medium) && a.attribution_basis === (a.source === 'unknown' ? 'unavailable' : a.source === 'direct_or_unknown' ? 'no_referrer' : 'external_referrer');
}

export function visit({ saved, now, url, referrer, storageAvailable = true, navigation = 'navigate', initial = /** @type {ReturnType<typeof classify> | null} */ (null) }) {
  if (!storageAvailable) return { attribution: unknown(), lastActive: now };
  // Restore only reviewed categorical data, never arbitrary stored properties.
  if (saved && validAttribution(saved.attribution) && Number.isFinite(saved.lastActive) && now >= saved.lastActive && now - saved.lastActive < TTL) {
    const { source, medium, attribution_basis, campaign_id } = saved.attribution;
    return { attribution: { source, medium, attribution_basis, ...(campaign_id ? { campaign_id } : {}) }, lastActive: now };
  }
  return { attribution: navigation !== 'navigate' || saved ? unknown() : validAttribution(initial) ? initial : classify(url, referrer), lastActive: now };
}

export function validEvent(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return false;
  const allowed = ['event', 'page', 'locale', 'contact_channel', 'source', 'medium', 'attribution_basis', 'campaign_id', 'error_category'];
  if (Object.keys(data).some(k => !allowed.includes(k))) return false;
  if (!['contact_click', 'contact_start', 'contact_registered', 'contact_error'].includes(data.event) || !publicPaths.includes(data.page) || data.locale !== (data.page.startsWith('/en/') ? 'en' : 'pt')) return false;
  if (!['form', 'whatsapp', 'email'].includes(data.contact_channel) || !validAttribution(data)) return false;
  if (data.event !== 'contact_click' && data.contact_channel !== 'form') return false;
  return data.event === 'contact_error' ? ['validation', 'unavailable', 'delivery'].includes(data.error_category) : data.error_category === undefined;
}
