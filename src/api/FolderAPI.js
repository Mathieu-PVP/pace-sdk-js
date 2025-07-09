import { Folder } from '../models/Folder.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FolderAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Folder', Folder); 
    }
}
