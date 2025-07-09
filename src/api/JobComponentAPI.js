import { JobComponent } from '../models/JobComponent.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobComponentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobComponent', JobComponent); 
    }
}
