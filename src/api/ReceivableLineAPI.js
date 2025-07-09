import { ReceivableLine } from '../models/ReceivableLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReceivableLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ReceivableLine', ReceivableLine); 
    }
}
