import { EstimateOption } from '../models/EstimateOption.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateOptionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateOption', EstimateOption); 
    }
}
