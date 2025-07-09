import { ActivityCodeUpstreamDependencies } from '../models/ActivityCodeUpstreamDependencies.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ActivityCodeUpstreamDependenciesAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ActivityCodeUpstreamDependencies', ActivityCodeUpstreamDependencies); 
    }
}
