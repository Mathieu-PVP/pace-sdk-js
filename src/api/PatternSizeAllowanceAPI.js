import { PatternSizeAllowance } from '../models/PatternSizeAllowance.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PatternSizeAllowanceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PatternSizeAllowance', PatternSizeAllowance); 
    }
}
