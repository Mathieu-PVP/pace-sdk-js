import { FulfillmentSetup } from '../models/FulfillmentSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FulfillmentSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FulfillmentSetup', FulfillmentSetup); 
    }
}
