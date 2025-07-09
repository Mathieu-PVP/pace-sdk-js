import { Workstation } from '../models/Workstation.js';
import { AbstractAPI } from './AbstractAPI.js';

export class WorkstationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Workstation', Workstation); 
    }
}
