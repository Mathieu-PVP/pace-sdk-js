import { ItemTemplateType } from '../models/ItemTemplateType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ItemTemplateTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ItemTemplateType', ItemTemplateType); 
    }
}
