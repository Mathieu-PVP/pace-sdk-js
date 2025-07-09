import { MailingType } from '../models/MailingType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class MailingTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'MailingType', MailingType); 
    }
}
