import { EmailTemplateCategory } from '../models/EmailTemplateCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EmailTemplateCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EmailTemplateCategory', EmailTemplateCategory); 
    }
}
