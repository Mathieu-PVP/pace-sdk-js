import { ItemTemplateSetup } from '../models/ItemTemplateSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ItemTemplateSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ItemTemplateSetup', ItemTemplateSetup); 
    }
}
