import { ImportTemplate } from '../models/ImportTemplate.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ImportTemplateAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ImportTemplate', ImportTemplate); 
    }
}
