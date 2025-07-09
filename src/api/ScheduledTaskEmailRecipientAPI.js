import { ScheduledTaskEmailRecipient } from '../models/ScheduledTaskEmailRecipient.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ScheduledTaskEmailRecipientAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ScheduledTaskEmailRecipient', ScheduledTaskEmailRecipient); 
    }
}
