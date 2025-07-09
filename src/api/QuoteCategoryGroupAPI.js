import { QuoteCategoryGroup } from '../models/QuoteCategoryGroup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteCategoryGroupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteCategoryGroup', QuoteCategoryGroup); 
    }
}
