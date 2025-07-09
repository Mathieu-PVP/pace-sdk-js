import { UOMRange } from '../models/UOMRange.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UOMRangeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UOMRange', UOMRange); 
    }
}
