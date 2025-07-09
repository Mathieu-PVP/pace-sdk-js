import { EstimatePartSizeAllowance } from '../models/EstimatePartSizeAllowance.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimatePartSizeAllowanceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimatePartSizeAllowance', EstimatePartSizeAllowance); 
    }
}
