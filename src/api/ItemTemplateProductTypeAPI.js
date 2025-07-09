import { ItemTemplateProductType } from '../models/ItemTemplateProductType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ItemTemplateProductTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ItemTemplateProductType', ItemTemplateProductType); 
    }
}
