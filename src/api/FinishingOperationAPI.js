import { FinishingOperation } from '../models/FinishingOperation.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FinishingOperationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FinishingOperation', FinishingOperation); 
    }
}
