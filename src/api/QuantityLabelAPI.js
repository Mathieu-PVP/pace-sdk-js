import { QuantityLabel } from '../models/QuantityLabel.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuantityLabelAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuantityLabel', QuantityLabel); 
    }
}
