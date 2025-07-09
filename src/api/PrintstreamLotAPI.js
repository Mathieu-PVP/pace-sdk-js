import { PrintstreamLot } from '../models/PrintstreamLot.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PrintstreamLotAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PrintstreamLot', PrintstreamLot); 
    }
}
