import { ItemTemplateLineAttribute } from '../models/ItemTemplateLineAttribute.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ItemTemplateLineAttributeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ItemTemplateLineAttribute', ItemTemplateLineAttribute); 
    }
}
