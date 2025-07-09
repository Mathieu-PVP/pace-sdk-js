import { PriceDetail } from '../models/PriceDetail.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PriceDetailAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PriceDetail', PriceDetail); 
    }
}
