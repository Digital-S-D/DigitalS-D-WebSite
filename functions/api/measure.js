import { collect } from '../../lib/measurement-server.mjs';
export const onRequest = context => collect(context);
