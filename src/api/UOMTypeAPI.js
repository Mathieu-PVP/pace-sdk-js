import { UOMType } from '../models/UOMType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UOMTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UOMType', UOMType); 
    }
}
