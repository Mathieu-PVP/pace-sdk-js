import { ItemTemplateProductTypeMapping } from '../models/ItemTemplateProductTypeMapping.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ItemTemplateProductTypeMappingAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ItemTemplateProductTypeMapping', ItemTemplateProductTypeMapping); 
    }
}
