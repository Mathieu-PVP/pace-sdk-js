import { EstimateRequestMaterial } from '../models/EstimateRequestMaterial.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateRequestMaterialAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateRequestMaterial', EstimateRequestMaterial); 
    }
}
