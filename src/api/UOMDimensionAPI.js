import { UOMDimension } from '../models/UOMDimension.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UOMDimensionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UOMDimension', UOMDimension); 
    }
}
