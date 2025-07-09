import { ExtraStock } from '../models/ExtraStock.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ExtraStockAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ExtraStock', ExtraStock); 
    }
}
