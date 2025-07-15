import pkg from '../package.json' with { type: 'json' };
import models from './models/index.js';
import { PaceClient } from './client/PaceClient.js';

const version = pkg.version

export {
  PaceClient,
  models,
  version
};