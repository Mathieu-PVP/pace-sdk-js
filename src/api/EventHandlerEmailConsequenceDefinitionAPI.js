import { EventHandlerEmailConsequenceDefinition } from '../models/EventHandlerEmailConsequenceDefinition.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EventHandlerEmailConsequenceDefinitionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EventHandlerEmailConsequenceDefinition', EventHandlerEmailConsequenceDefinition); 
    }
}
