import { InstallationToolCategory } from '../models/InstallationToolCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InstallationToolCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InstallationToolCategory', InstallationToolCategory); 
    }
}
