import { WIPCategory } from '../models/WIPCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class WIPCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'WIPCategory', WIPCategory); 
    }
}
