import { GLAccount } from '../models/GLAccount.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLAccountAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLAccount', GLAccount); 
    }
}
