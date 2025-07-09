import { FileAttachment } from '../models/FileAttachment.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FileAttachmentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FileAttachment', FileAttachment); 
    }
}
