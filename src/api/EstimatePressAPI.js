import { EstimatePress } from '../models/EstimatePress.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimatePressAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimatePress', EstimatePress); 
    }
}
