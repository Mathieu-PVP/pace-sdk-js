import { PaperCost } from '../models/PaperCost.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaperCostAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaperCost', PaperCost); 
    }
}
