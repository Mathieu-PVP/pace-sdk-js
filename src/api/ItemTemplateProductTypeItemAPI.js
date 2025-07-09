import { ItemTemplateProductTypeItem } from '../models/ItemTemplateProductTypeItem.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ItemTemplateProductTypeItemAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ItemTemplateProductTypeItem', ItemTemplateProductTypeItem); 
    }
}
