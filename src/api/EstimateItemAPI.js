import { EstimateItem } from '../models/EstimateItem.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateItemAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateItem', EstimateItem); 
    }
}
