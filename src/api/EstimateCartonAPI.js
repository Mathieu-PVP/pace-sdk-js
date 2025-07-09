import { EstimateCarton } from '../models/EstimateCarton.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateCartonAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateCarton', EstimateCarton); 
    }
}
