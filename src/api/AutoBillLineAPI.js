import { AutoBillLine } from '../models/AutoBillLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AutoBillLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AutoBillLine', AutoBillLine); 
    }
}
