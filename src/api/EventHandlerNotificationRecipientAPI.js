import { EventHandlerNotificationRecipient } from '../models/EventHandlerNotificationRecipient.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EventHandlerNotificationRecipientAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EventHandlerNotificationRecipient', EventHandlerNotificationRecipient); 
    }
}
