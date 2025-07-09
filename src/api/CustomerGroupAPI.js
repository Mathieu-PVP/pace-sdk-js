import { CustomerGroup } from '../models/CustomerGroup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CustomerGroupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CustomerGroup', CustomerGroup); 
    }
}
