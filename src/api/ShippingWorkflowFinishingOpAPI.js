import { ShippingWorkflowFinishingOp } from '../models/ShippingWorkflowFinishingOp.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ShippingWorkflowFinishingOpAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ShippingWorkflowFinishingOp', ShippingWorkflowFinishingOp); 
    }
}
