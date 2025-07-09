import { FinishingOperationSpeed } from '../models/FinishingOperationSpeed.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FinishingOperationSpeedAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FinishingOperationSpeed', FinishingOperationSpeed); 
    }
}
