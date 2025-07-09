import { PaceConnectDatabaseConnection } from '../models/PaceConnectDatabaseConnection.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectDatabaseConnectionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectDatabaseConnection', PaceConnectDatabaseConnection); 
    }
}
