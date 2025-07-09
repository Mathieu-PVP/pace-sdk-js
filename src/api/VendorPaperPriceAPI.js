import { VendorPaperPrice } from '../models/VendorPaperPrice.js';
import { AbstractAPI } from './AbstractAPI.js';

export class VendorPaperPriceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'VendorPaperPrice', VendorPaperPrice); 
    }
}
