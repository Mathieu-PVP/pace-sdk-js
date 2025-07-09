import { ChangeOrder } from '../models/ChangeOrder.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ChangeOrderAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ChangeOrder', ChangeOrder); 
    }
}
