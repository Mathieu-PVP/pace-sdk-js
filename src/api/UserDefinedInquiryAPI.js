import { UserDefinedInquiry } from '../models/UserDefinedInquiry.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UserDefinedInquiryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UserDefinedInquiry', UserDefinedInquiry); 
    }
}
