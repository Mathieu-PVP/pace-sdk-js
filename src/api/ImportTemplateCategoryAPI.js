import { ImportTemplateCategory } from '../models/ImportTemplateCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ImportTemplateCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ImportTemplateCategory', ImportTemplateCategory); 
    }
}
