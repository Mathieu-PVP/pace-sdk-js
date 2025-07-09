import { VendorPaper } from '../models/VendorPaper.js';
import { AbstractAPI } from './AbstractAPI.js';

export class VendorPaperAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'VendorPaper', VendorPaper); 
    }
}
