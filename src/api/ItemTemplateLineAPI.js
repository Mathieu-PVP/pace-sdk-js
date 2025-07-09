import { ItemTemplateLine } from '../models/ItemTemplateLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ItemTemplateLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ItemTemplateLine', ItemTemplateLine); 
    }
}
