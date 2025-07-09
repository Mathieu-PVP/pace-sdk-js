import { MailingSize } from '../models/MailingSize.js';
import { AbstractAPI } from './AbstractAPI.js';

export class MailingSizeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'MailingSize', MailingSize); 
    }
}
