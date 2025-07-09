import { InstallationTool } from '../models/InstallationTool.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InstallationToolAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InstallationTool', InstallationTool); 
    }
}
