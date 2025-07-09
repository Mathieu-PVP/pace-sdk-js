import { FileType } from '../models/FileType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FileTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FileType', FileType); 
    }
}
