import { EventHandlerExecuteConnectDefinition } from '../models/EventHandlerExecuteConnectDefinition.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EventHandlerExecuteConnectDefinitionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EventHandlerExecuteConnectDefinition', EventHandlerExecuteConnectDefinition); 
    }
}
