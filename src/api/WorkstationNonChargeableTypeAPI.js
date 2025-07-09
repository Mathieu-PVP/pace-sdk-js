import { WorkstationNonChargeableType } from '../models/WorkstationNonChargeableType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class WorkstationNonChargeableTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'WorkstationNonChargeableType', WorkstationNonChargeableType); 
    }
}
