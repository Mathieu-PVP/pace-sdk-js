import { ReportEmailRecipient } from '../models/ReportEmailRecipient.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReportEmailRecipientAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ReportEmailRecipient', ReportEmailRecipient); 
    }
}
