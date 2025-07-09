import { ImportTemplateObjectNode } from '../models/ImportTemplateObjectNode.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ImportTemplateObjectNodeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ImportTemplateObjectNode', ImportTemplateObjectNode); 
    }
}
