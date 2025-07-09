import { FolderSpeed } from '../models/FolderSpeed.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FolderSpeedAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FolderSpeed', FolderSpeed); 
    }
}
