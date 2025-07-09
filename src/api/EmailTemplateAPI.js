import { EmailTemplate } from '../models/EmailTemplate.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EmailTemplateAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EmailTemplate', EmailTemplate); 
    }
}
