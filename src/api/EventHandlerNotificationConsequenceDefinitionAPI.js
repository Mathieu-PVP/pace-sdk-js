import { EventHandlerNotificationConsequenceDefinition } from '../models/EventHandlerNotificationConsequenceDefinition.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EventHandlerNotificationConsequenceDefinitionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EventHandlerNotificationConsequenceDefinition', EventHandlerNotificationConsequenceDefinition); 
    }
}
