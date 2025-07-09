import { ProductTemplate } from '../models/ProductTemplate.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ProductTemplateAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ProductTemplate', ProductTemplate); 
    }
}
