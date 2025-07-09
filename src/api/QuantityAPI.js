import { Quantity } from '../models/Quantity.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuantityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Quantity', Quantity); 
    }
}
