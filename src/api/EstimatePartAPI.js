import { EstimatePart } from '../models/EstimatePart.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimatePartAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimatePart', EstimatePart); 
    }
}
