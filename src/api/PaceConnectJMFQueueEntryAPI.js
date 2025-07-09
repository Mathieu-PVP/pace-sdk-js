import { PaceConnectJMFQueueEntry } from '../models/PaceConnectJMFQueueEntry.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectJMFQueueEntryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectJMFQueueEntry', PaceConnectJMFQueueEntry); 
    }
}
