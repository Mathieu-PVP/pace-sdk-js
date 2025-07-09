import { OutsidePurchaseWorkflowItem } from '../models/OutsidePurchaseWorkflowItem.js';
import { AbstractAPI } from './AbstractAPI.js';

export class OutsidePurchaseWorkflowItemAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'OutsidePurchaseWorkflowItem', OutsidePurchaseWorkflowItem); 
    }
}
