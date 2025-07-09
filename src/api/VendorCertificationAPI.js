import { VendorCertification } from '../models/VendorCertification.js';
import { AbstractAPI } from './AbstractAPI.js';

export class VendorCertificationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'VendorCertification', VendorCertification); 
    }
}
