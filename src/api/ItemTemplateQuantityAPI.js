import { ItemTemplateQuantity } from '../models/ItemTemplateQuantity.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ItemTemplateQuantityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ItemTemplateQuantity', ItemTemplateQuantity); 
    }
}
