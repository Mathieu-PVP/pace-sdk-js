import { QuoteShipment } from '../models/QuoteShipment.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteShipmentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteShipment', QuoteShipment); 
    }
}
