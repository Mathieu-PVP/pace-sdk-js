import { FinishingOperationDisplayAttribute } from '../models/FinishingOperationDisplayAttribute.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FinishingOperationDisplayAttributeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FinishingOperationDisplayAttribute', FinishingOperationDisplayAttribute); 
    }
}
