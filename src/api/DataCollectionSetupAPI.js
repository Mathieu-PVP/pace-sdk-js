import { DataCollectionSetup } from '../models/DataCollectionSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class DataCollectionSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'DataCollectionSetup', DataCollectionSetup); 
    }
}
