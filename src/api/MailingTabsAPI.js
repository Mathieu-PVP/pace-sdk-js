import { MailingTabs } from '../models/MailingTabs.js';
import { AbstractAPI } from './AbstractAPI.js';

export class MailingTabsAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'MailingTabs', MailingTabs); 
    }
}
