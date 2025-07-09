import { PreviousPassword } from '../models/PreviousPassword.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PreviousPasswordAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PreviousPassword', PreviousPassword); 
    }
}
