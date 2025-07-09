import { InquiryDefinition } from '../models/InquiryDefinition.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InquiryDefinitionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InquiryDefinition', InquiryDefinition); 
    }
}
