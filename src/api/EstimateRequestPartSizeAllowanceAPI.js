import { EstimateRequestPartSizeAllowance } from '../models/EstimateRequestPartSizeAllowance.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateRequestPartSizeAllowanceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateRequestPartSizeAllowance', EstimateRequestPartSizeAllowance); 
    }
}
