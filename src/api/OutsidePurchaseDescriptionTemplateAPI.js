import { OutsidePurchaseDescriptionTemplate } from '../models/OutsidePurchaseDescriptionTemplate.js';
import { AbstractAPI } from './AbstractAPI.js';

export class OutsidePurchaseDescriptionTemplateAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'OutsidePurchaseDescriptionTemplate', OutsidePurchaseDescriptionTemplate); 
    }
}
