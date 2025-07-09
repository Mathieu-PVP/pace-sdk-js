import { InstallationToolChecklist } from '../models/InstallationToolChecklist.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InstallationToolChecklistAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InstallationToolChecklist', InstallationToolChecklist); 
    }
}
