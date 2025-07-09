import { CostCenterType } from '../models/CostCenterType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CostCenterTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CostCenterType', CostCenterType); 
    }
}
