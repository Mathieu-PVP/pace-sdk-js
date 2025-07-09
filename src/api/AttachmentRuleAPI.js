import { AttachmentRule } from '../models/AttachmentRule.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AttachmentRuleAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AttachmentRule', AttachmentRule); 
    }
}
