import { BillStatus } from '../models/BillStatus.js';
import { AbstractAPI } from './AbstractAPI.js';

export class BillStatusAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'BillStatus', BillStatus); 
    }
}
