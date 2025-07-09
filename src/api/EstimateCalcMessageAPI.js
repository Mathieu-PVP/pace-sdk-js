import { EstimateCalcMessage } from '../models/EstimateCalcMessage.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateCalcMessageAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateCalcMessage', EstimateCalcMessage); 
    }
}
