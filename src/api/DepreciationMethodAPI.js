import { DepreciationMethod } from '../models/DepreciationMethod.js';
import { AbstractAPI } from './AbstractAPI.js';

export class DepreciationMethodAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'DepreciationMethod', DepreciationMethod); 
    }
}
