import { InkDefault } from '../models/InkDefault.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InkDefaultAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InkDefault', InkDefault); 
    }
}
