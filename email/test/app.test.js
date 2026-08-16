import assert from 'node:assert/strict';
import test from 'node:test';
import app from '../src/app.js';

test('GET /health reports the service as available', async () => {
  const server = app.listen(0);
  const { port } = server.address();

  try {
    const response = await fetch(`http://127.0.0.1:${port}/health`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: 'UP' });
  } finally {
    server.close();
  }
});
