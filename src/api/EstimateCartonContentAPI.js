import { EstimateCartonContent } from '../models/EstimateCartonContent.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateCartonContentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateCartonContent', EstimateCartonContent); 
    }
}
