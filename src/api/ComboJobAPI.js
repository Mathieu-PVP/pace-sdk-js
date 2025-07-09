import { ComboJob } from '../models/ComboJob.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ComboJobAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ComboJob', ComboJob); 
    }
}
