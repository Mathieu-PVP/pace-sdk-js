import { EstimateVariantSetEntry } from '../models/EstimateVariantSetEntry.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateVariantSetEntryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateVariantSetEntry', EstimateVariantSetEntry); 
    }
}
