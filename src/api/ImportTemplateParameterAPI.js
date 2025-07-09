import { ImportTemplateParameter } from '../models/ImportTemplateParameter.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ImportTemplateParameterAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ImportTemplateParameter', ImportTemplateParameter); 
    }
}
