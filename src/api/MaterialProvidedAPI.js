import { MaterialProvided } from '../models/MaterialProvided.js';
import { AbstractAPI } from './AbstractAPI.js';

export class MaterialProvidedAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'MaterialProvided', MaterialProvided); 
    }
}
