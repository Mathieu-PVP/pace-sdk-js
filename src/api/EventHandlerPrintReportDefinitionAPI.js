import { EventHandlerPrintReportDefinition } from '../models/EventHandlerPrintReportDefinition.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EventHandlerPrintReportDefinitionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EventHandlerPrintReportDefinition', EventHandlerPrintReportDefinition); 
    }
}
