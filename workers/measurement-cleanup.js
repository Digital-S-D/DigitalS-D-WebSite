import { cleanup } from '../lib/measurement-server.mjs';
export default { scheduled(_controller, env, context) { context.waitUntil(cleanup(env)); } };
