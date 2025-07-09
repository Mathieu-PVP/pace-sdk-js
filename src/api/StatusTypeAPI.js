import { StatusType } from '../models/StatusType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class StatusTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'StatusType', StatusType); 
    }
}
