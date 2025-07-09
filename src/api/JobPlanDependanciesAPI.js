import { JobPlanDependancies } from '../models/JobPlanDependancies.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPlanDependanciesAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPlanDependancies', JobPlanDependancies); 
    }
}
