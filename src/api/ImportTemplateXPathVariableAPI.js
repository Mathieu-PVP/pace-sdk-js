import { ImportTemplateXPathVariable } from '../models/ImportTemplateXPathVariable.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ImportTemplateXPathVariableAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ImportTemplateXPathVariable', ImportTemplateXPathVariable); 
    }
}
