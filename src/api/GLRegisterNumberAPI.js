import { GLRegisterNumber } from '../models/GLRegisterNumber.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLRegisterNumberAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLRegisterNumber', GLRegisterNumber); 
    }
}
