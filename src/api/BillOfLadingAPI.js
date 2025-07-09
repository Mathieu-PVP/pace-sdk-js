import { BillOfLading } from '../models/BillOfLading.js';
import { AbstractAPI } from './AbstractAPI.js';

export class BillOfLadingAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'BillOfLading', BillOfLading); 
    }
}
