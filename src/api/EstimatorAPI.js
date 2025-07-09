import { Estimator } from '../models/Estimator.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimatorAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Estimator', Estimator); 
    }
}
