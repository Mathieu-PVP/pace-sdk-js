import { OutsidePurchaseWorkflow } from '../models/OutsidePurchaseWorkflow.js';
import { AbstractAPI } from './AbstractAPI.js';

export class OutsidePurchaseWorkflowAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'OutsidePurchaseWorkflow', OutsidePurchaseWorkflow); 
    }
}
