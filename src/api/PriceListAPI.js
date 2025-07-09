import { PriceList } from '../models/PriceList.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PriceListAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PriceList', PriceList); 
    }
}
