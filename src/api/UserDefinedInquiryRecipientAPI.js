import { UserDefinedInquiryRecipient } from '../models/UserDefinedInquiryRecipient.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UserDefinedInquiryRecipientAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UserDefinedInquiryRecipient', UserDefinedInquiryRecipient); 
    }
}
