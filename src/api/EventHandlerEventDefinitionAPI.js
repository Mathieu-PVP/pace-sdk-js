import { EventHandlerEventDefinition } from '../models/EventHandlerEventDefinition.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EventHandlerEventDefinitionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EventHandlerEventDefinition', EventHandlerEventDefinition); 
    }
}
