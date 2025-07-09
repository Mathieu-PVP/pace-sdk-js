import { ShoppingCartExtraTemplate } from '../models/ShoppingCartExtraTemplate.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ShoppingCartExtraTemplateAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ShoppingCartExtraTemplate', ShoppingCartExtraTemplate); 
    }
}
