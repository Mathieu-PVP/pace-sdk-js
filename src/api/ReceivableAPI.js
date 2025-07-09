import { Receivable } from '../models/Receivable.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReceivableAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Receivable', Receivable); 
    }
}
