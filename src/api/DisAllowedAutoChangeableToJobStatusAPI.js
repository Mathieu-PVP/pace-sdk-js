import { DisAllowedAutoChangeableToJobStatus } from '../models/DisAllowedAutoChangeableToJobStatus.js';
import { AbstractAPI } from './AbstractAPI.js';

export class DisAllowedAutoChangeableToJobStatusAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'DisAllowedAutoChangeableToJobStatus', DisAllowedAutoChangeableToJobStatus); 
    }
}
