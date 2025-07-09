import { EstimateSkid } from '../models/EstimateSkid.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateSkidAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateSkid', EstimateSkid); 
    }
}
