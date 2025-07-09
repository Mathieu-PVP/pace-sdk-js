import { CostCenter } from '../models/CostCenter.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CostCenterAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CostCenter', CostCenter); 
    }
}
