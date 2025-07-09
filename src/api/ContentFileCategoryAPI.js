import { ContentFileCategory } from '../models/ContentFileCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ContentFileCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ContentFileCategory', ContentFileCategory); 
    }
}
