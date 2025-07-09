import { EventHandlerDefinition } from '../models/EventHandlerDefinition.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EventHandlerDefinitionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EventHandlerDefinition', EventHandlerDefinition); 
    }
}
