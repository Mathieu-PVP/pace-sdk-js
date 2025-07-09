import { FinishingOperationGroup } from '../models/FinishingOperationGroup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FinishingOperationGroupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FinishingOperationGroup', FinishingOperationGroup); 
    }
}
