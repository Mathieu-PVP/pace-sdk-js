import { GLSetup } from '../models/GLSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLSetup', GLSetup); 
    }
}
