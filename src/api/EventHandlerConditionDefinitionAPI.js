import { EventHandlerConditionDefinition } from '../models/EventHandlerConditionDefinition.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EventHandlerConditionDefinitionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EventHandlerConditionDefinition', EventHandlerConditionDefinition); 
    }
}
