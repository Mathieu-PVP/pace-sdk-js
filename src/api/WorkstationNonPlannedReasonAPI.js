import { WorkstationNonPlannedReason } from '../models/WorkstationNonPlannedReason.js';
import { AbstractAPI } from './AbstractAPI.js';

export class WorkstationNonPlannedReasonAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'WorkstationNonPlannedReason', WorkstationNonPlannedReason); 
    }
}
