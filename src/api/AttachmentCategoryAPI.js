import { AttachmentCategory } from '../models/AttachmentCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AttachmentCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AttachmentCategory', AttachmentCategory); 
    }
}
