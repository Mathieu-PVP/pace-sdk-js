import { EventHandlerEmailRecipient } from '../models/EventHandlerEmailRecipient.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EventHandlerEmailRecipientAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EventHandlerEmailRecipient', EventHandlerEmailRecipient); 
    }
}
