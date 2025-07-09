import { ItemTemplate } from '../models/ItemTemplate.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ItemTemplateAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ItemTemplate', ItemTemplate); 
    }
}
