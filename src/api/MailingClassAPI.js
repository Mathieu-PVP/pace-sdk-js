import { MailingClass } from '../models/MailingClass.js';
import { AbstractAPI } from './AbstractAPI.js';

export class MailingClassAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'MailingClass', MailingClass); 
    }
}
