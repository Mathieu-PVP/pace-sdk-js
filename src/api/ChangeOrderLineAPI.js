import { ChangeOrderLine } from '../models/ChangeOrderLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ChangeOrderLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ChangeOrderLine', ChangeOrderLine); 
    }
}
