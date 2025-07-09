import { TagCategory } from '../models/TagCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TagCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'TagCategory', TagCategory); 
    }
}
