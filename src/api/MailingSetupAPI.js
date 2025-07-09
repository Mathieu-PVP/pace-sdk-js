import { MailingSetup } from '../models/MailingSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class MailingSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'MailingSetup', MailingSetup); 
    }
}
