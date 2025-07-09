import { SubJobType } from '../models/SubJobType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SubJobTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SubJobType', SubJobType); 
    }
}
