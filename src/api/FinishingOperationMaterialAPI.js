import { FinishingOperationMaterial } from '../models/FinishingOperationMaterial.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FinishingOperationMaterialAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FinishingOperationMaterial', FinishingOperationMaterial); 
    }
}
