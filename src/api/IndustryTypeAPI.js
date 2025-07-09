import { IndustryType } from '../models/IndustryType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class IndustryTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'IndustryType', IndustryType); 
    }
}
