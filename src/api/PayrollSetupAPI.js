import { PayrollSetup } from '../models/PayrollSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PayrollSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PayrollSetup', PayrollSetup); 
    }
}
