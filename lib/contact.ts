export type ContactData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactData, string>>;

const validAreaCodes = new Set([
  '11','12','13','14','15','16','17','18','19','21','22','24','27','28',
  '31','32','33','34','35','37','38','41','42','43','44','45','46','47','48','49',
  '51','53','54','55','61','62','63','64','65','66','67','68','69',
  '71','73','74','75','77','79','81','82','83','84','85','86','87','88','89',
  '91','92','93','94','95','96','97','98','99',
]);

function phoneDigits(value: string): string {
  const digits = value.replace(/\D/g, '');
  return (digits.length === 12 || digits.length === 13) && digits.startsWith('55')
    ? digits.slice(2) : digits;
}

export function formatPhone(value: string): string {
  const digits = phoneDigits(value);
  // Preserve números longos para mostrar o erro, em vez de truncar um contato.
  if (digits.length > 11) return value;
  if (!digits) return '';
  if (digits.length <= 2) return `(${digits}`;
  const subscriber = digits.slice(2);
  const split = subscriber.length > 8 ? 5 : 4;
  return `(${digits.slice(0, 2)}) ${subscriber.length > split
    ? `${subscriber.slice(0, split)}-${subscriber.slice(split)}` : subscriber}`;
}

export function validateContact(data: ContactData): ContactErrors {
  const errors: ContactErrors = {};
  if (data.name.trim().length < 2) errors.name = 'Informe seu nome com pelo menos 2 caracteres.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Digite um e-mail válido, como nome@empresa.com.';
  }
  const digits = phoneDigits(data.phone);
  const subscriber = digits.slice(2);
  if (!validAreaCodes.has(digits.slice(0, 2)) ||
      !/^(?:[2-5]\d{7}|9\d{8})$/.test(subscriber) || /^(\d)\1+$/.test(subscriber)) {
    errors.phone = 'Informe um telefone com DDD: 10 dígitos para fixo ou 11 para celular.';
  }
  return errors;
}

export function isFormEndpointConfigured(endpoint: string | undefined): endpoint is string {
  return Boolean(endpoint && /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint));
}
