import { EventHandlerEmailReportAttachment } from '../models/EventHandlerEmailReportAttachment.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EventHandlerEmailReportAttachmentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EventHandlerEmailReportAttachment', EventHandlerEmailReportAttachment); 
    }
}
