import { PaperWeight } from '../models/PaperWeight.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaperWeightAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaperWeight', PaperWeight); 
    }
}
