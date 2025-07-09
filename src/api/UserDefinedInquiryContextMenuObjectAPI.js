import { UserDefinedInquiryContextMenuObject } from '../models/UserDefinedInquiryContextMenuObject.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UserDefinedInquiryContextMenuObjectAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UserDefinedInquiryContextMenuObject', UserDefinedInquiryContextMenuObject); 
    }
}
