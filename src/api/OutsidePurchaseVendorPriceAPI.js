import { OutsidePurchaseVendorPrice } from '../models/OutsidePurchaseVendorPrice.js';
import { AbstractAPI } from './AbstractAPI.js';

export class OutsidePurchaseVendorPriceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'OutsidePurchaseVendorPrice', OutsidePurchaseVendorPrice); 
    }
}
