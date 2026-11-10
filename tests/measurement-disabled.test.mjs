import assert from 'node:assert/strict';
import { test } from 'node:test';
test('disabled build never reads browser storage or emits requests', async () => {
  process.env.NEXT_PUBLIC_MEASUREMENT_ENABLED = 'false';
  const measurement = await import('../lib/measurement-browser.ts');
  // Browser globals intentionally absent: disabled mode must not consult them.
  assert.equal(measurement.measurementEnabled, false);
  assert.doesNotThrow(() => measurement.captureEntry());
  assert.equal(measurement.measure('contact_start'), false);
});
