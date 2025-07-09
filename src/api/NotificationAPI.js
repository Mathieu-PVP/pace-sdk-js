import { Notification } from '../models/Notification.js';
import { AbstractAPI } from './AbstractAPI.js';

export class NotificationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Notification', Notification); 
    }
}
