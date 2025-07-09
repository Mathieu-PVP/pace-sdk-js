import { AutoBill } from '../models/AutoBill.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AutoBillAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AutoBill', AutoBill); 
    }
}
