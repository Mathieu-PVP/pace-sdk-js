import { ProductionType } from '../models/ProductionType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ProductionTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ProductionType', ProductionType); 
    }
}
