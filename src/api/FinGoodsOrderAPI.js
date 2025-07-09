import { FinGoodsOrder } from '../models/FinGoodsOrder.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FinGoodsOrderAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FinGoodsOrder', FinGoodsOrder); 
    }
}
