import { UserDefinedInquiryCategory } from '../models/UserDefinedInquiryCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UserDefinedInquiryCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UserDefinedInquiryCategory', UserDefinedInquiryCategory); 
    }
}
