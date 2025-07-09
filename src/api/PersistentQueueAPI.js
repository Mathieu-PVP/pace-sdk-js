import { PersistentQueue } from '../models/PersistentQueue.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PersistentQueueAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PersistentQueue', PersistentQueue); 
    }
}
