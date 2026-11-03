import assert from 'node:assert/strict';
import { test } from 'node:test';
import { formatPhone, validateContact, isFormEndpointConfigured } from '../lib/contact.ts';

const valid = { name: 'Contato de teste', email: 'teste@example.com', phone: '(31) 99299-8761', company: '', service: '', budget: '', message: '' };

test('aceita celular, fixo e código do país; mantém a máscara correta', () => {
  for (const phone of ['31992998761', '(31) 3222-1234', '+55 (31) 99299-8761', '+55 31 3222-1234']) {
    assert.equal(validateContact({ ...valid, phone }).phone, undefined);
  }
  assert.equal(formatPhone('31992998761'), '(31) 99299-8761');
  assert.equal(formatPhone('3132221234'), '(31) 3222-1234');
  assert.equal(formatPhone('+5531992998761'), '(31) 99299-8761');
});

test('rejeita contatos incompletos, DDD inexistente e números inválidos', () => {
  for (const phone of ['', '(31) 9', '0032221234', '2032221234', '3191234567', '31812345678', '31999999999', '31992998761111']) {
    assert.ok(validateContact({ ...valid, phone }).phone, phone);
  }
  assert.equal(formatPhone('31992998761111'), '31992998761111');
});

test('exige nome e e-mail válidos, com espaços periféricos tolerados', () => {
  assert.deepEqual(validateContact(valid), {});
  assert.deepEqual(validateContact({ ...valid, name: '  Ana  ', email: '  ana@example.com  ' }), {});
  assert.ok(validateContact({ ...valid, name: '  ' }).name);
  for (const email of ['', 'ana', 'ana@', 'ana@empresa', 'ana @empresa.com']) {
    assert.ok(validateContact({ ...valid, email }).email);
  }
});

test('aceita somente configuração real no formato esperado do Formspree', () => {
  assert.equal(isFormEndpointConfigured('https://formspree.io/f/abc123'), true);
  for (const endpoint of [undefined, '', 'https://formspree.io/f/SEU_ID_AQUI', 'http://formspree.io/f/abc123', 'https://outro.example/f/abc123']) {
    assert.equal(isFormEndpointConfigured(endpoint), false);
  }
});
