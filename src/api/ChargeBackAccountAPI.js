import { ChargeBackAccount } from '../models/ChargeBackAccount.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ChargeBackAccountAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ChargeBackAccount', ChargeBackAccount); 
    }
}
