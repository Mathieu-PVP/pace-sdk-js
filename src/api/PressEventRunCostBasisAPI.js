import { PressEventRunCostBasis } from '../models/PressEventRunCostBasis.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PressEventRunCostBasisAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PressEventRunCostBasis', PressEventRunCostBasis); 
    }
}
