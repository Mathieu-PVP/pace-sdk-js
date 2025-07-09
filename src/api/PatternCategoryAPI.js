import { PatternCategory } from '../models/PatternCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PatternCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PatternCategory', PatternCategory); 
    }
}
