import { BillCheck } from '../models/BillCheck.js';
import { AbstractAPI } from './AbstractAPI.js';

export class BillCheckAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'BillCheck', BillCheck); 
    }
}
