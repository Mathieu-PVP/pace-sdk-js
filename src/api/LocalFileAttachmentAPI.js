import { LocalFileAttachment } from '../models/LocalFileAttachment.js';
import { AbstractAPI } from './AbstractAPI.js';

export class LocalFileAttachmentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'LocalFileAttachment', LocalFileAttachment); 
    }
}
