import { PrepressWorkflow } from '../models/PrepressWorkflow.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PrepressWorkflowAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PrepressWorkflow', PrepressWorkflow); 
    }
}
