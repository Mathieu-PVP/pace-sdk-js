import { FinishingMachineType } from '../models/FinishingMachineType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FinishingMachineTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FinishingMachineType', FinishingMachineType); 
    }
}
