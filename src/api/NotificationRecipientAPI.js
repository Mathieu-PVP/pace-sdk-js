import { NotificationRecipient } from '../models/NotificationRecipient.js';
import { AbstractAPI } from './AbstractAPI.js';

export class NotificationRecipientAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'NotificationRecipient', NotificationRecipient); 
    }
}
