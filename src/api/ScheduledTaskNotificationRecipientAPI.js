import { ScheduledTaskNotificationRecipient } from '../models/ScheduledTaskNotificationRecipient.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ScheduledTaskNotificationRecipientAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ScheduledTaskNotificationRecipient', ScheduledTaskNotificationRecipient); 
    }
}
