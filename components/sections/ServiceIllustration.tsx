/** Lightweight schematics explain the two formats without loading decorative assets. */
export function ServiceIllustration({ kind }: { kind: "site" | "landing" }) {
  return <div className={`service-art service-art-${kind}`} aria-hidden="true">
    <div className="mini-browser"><div className="mini-nav"><i /><i /><i /></div>
      <div className="mini-hero"><span /><b /></div>
      {kind === "site" ? <div className="mini-columns"><i /><i /><i /></div> : <div className="mini-offer"><i /><b /><span /></div>}
    </div>
    {kind === "site" && <><div className="mini-page mini-page-one" /><div className="mini-page mini-page-two" /></>}
    <span className="art-index">{kind === "site" ? "01" : "02"}</span>
  </div>;
}
