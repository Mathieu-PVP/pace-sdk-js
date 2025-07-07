import pkg from '../package.json' with { type: 'json' };

export { PaceClient } from './client/PaceClient.js';
export const version = pkg.version;