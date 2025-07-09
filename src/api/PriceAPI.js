import { Price } from '../models/Price.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PriceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Price', Price); 
    }
}
