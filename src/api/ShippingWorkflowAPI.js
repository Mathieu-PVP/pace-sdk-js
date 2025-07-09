import { ShippingWorkflow } from '../models/ShippingWorkflow.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ShippingWorkflowAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ShippingWorkflow', ShippingWorkflow); 
    }
}
