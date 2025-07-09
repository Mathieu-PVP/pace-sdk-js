import { PressEventWorkflow } from '../models/PressEventWorkflow.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PressEventWorkflowAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PressEventWorkflow', PressEventWorkflow); 
    }
}
