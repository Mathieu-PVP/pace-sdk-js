import { JobProductType } from '../models/JobProductType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobProductTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobProductType', JobProductType); 
    }
}
