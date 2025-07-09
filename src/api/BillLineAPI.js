import { BillLine } from '../models/BillLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class BillLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'BillLine', BillLine); 
    }
}
