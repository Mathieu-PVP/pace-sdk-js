import { NotificationRead } from '../models/NotificationRead.js';
import { AbstractAPI } from './AbstractAPI.js';

export class NotificationReadAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'NotificationRead', NotificationRead); 
    }
}
