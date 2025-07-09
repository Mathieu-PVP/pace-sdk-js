import { OutsidePurchaseTemplate } from '../models/OutsidePurchaseTemplate.js';
import { AbstractAPI } from './AbstractAPI.js';

export class OutsidePurchaseTemplateAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'OutsidePurchaseTemplate', OutsidePurchaseTemplate); 
    }
}
