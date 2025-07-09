import { FileAttachmentMeta } from '../models/FileAttachmentMeta.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FileAttachmentMetaAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FileAttachmentMeta', FileAttachmentMeta); 
    }
}
