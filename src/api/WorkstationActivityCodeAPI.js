import { WorkstationActivityCode } from '../models/WorkstationActivityCode.js';
import { AbstractAPI } from './AbstractAPI.js';

export class WorkstationActivityCodeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'WorkstationActivityCode', WorkstationActivityCode); 
    }
}
