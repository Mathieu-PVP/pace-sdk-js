import { BindingMethodFinishingOp } from '../models/BindingMethodFinishingOp.js';
import { AbstractAPI } from './AbstractAPI.js';

export class BindingMethodFinishingOpAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'BindingMethodFinishingOp', BindingMethodFinishingOp); 
    }
}
