import { ItemTemplateComboLink } from '../models/ItemTemplateComboLink.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ItemTemplateComboLinkAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ItemTemplateComboLink', ItemTemplateComboLink); 
    }
}
