import { WorkstationEmployee } from '../models/WorkstationEmployee.js';
import { AbstractAPI } from './AbstractAPI.js';

export class WorkstationEmployeeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'WorkstationEmployee', WorkstationEmployee); 
    }
}
