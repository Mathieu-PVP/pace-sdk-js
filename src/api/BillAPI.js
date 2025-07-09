import { Bill } from '../models/Bill.js';
import { AbstractAPI } from './AbstractAPI.js';

export class BillAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Bill', Bill); 
    }
}
