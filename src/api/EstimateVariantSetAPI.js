import { EstimateVariantSet } from '../models/EstimateVariantSet.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateVariantSetAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateVariantSet', EstimateVariantSet); 
    }
}
