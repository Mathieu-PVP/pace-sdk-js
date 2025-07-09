import { PriceListLine } from '../models/PriceListLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PriceListLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PriceListLine', PriceListLine); 
    }
}
