import { ExpressionCategory } from '../models/ExpressionCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ExpressionCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ExpressionCategory', ExpressionCategory); 
    }
}
