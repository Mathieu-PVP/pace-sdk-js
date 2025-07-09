import { EstimateMail } from '../models/EstimateMail.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateMailAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateMail', EstimateMail); 
    }
}
