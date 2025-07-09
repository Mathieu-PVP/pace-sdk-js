import { Samples } from '../models/Samples.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SamplesAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Samples', Samples); 
    }
}
