import { PressEventWorkflowItem } from '../models/PressEventWorkflowItem.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PressEventWorkflowItemAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PressEventWorkflowItem', PressEventWorkflowItem); 
    }
}
