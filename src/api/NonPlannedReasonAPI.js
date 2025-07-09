import { NonPlannedReason } from '../models/NonPlannedReason.js';
import { AbstractAPI } from './AbstractAPI.js';

export class NonPlannedReasonAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'NonPlannedReason', NonPlannedReason); 
    }
}
