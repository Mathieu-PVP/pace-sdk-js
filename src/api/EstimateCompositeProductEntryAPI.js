import { EstimateCompositeProductEntry } from '../models/EstimateCompositeProductEntry.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateCompositeProductEntryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateCompositeProductEntry', EstimateCompositeProductEntry); 
    }
}
