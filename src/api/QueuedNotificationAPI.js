import { QueuedNotification } from '../models/QueuedNotification.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QueuedNotificationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QueuedNotification', QueuedNotification); 
    }
}
