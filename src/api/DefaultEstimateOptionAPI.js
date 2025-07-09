import { DefaultEstimateOption } from '../models/DefaultEstimateOption.js';
import { AbstractAPI } from './AbstractAPI.js';

export class DefaultEstimateOptionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'DefaultEstimateOption', DefaultEstimateOption); 
    }
}
