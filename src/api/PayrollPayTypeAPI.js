import { PayrollPayType } from '../models/PayrollPayType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PayrollPayTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PayrollPayType', PayrollPayType); 
    }
}
