import { PaceConnectFieldMigration } from '../models/PaceConnectFieldMigration.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectFieldMigrationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectFieldMigration', PaceConnectFieldMigration); 
    }
}
