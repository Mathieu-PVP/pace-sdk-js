import { PaceConnectObjectMigration } from '../models/PaceConnectObjectMigration.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectObjectMigrationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectObjectMigration', PaceConnectObjectMigration); 
    }
}
