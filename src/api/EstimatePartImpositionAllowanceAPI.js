import { EstimatePartImpositionAllowance } from '../models/EstimatePartImpositionAllowance.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimatePartImpositionAllowanceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimatePartImpositionAllowance', EstimatePartImpositionAllowance); 
    }
}
