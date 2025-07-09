import { Vendor } from '../models/Vendor.js';
import { AbstractAPI } from './AbstractAPI.js';

export class VendorAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Vendor', Vendor); 
    }
}
