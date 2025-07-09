import { VendorType } from '../models/VendorType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class VendorTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'VendorType', VendorType); 
    }
}
