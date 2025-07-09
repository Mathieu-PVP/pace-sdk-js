import { SizeAllowanceType } from '../models/SizeAllowanceType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SizeAllowanceTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SizeAllowanceType', SizeAllowanceType); 
    }
}
