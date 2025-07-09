import { NotificationSetup } from '../models/NotificationSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class NotificationSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'NotificationSetup', NotificationSetup); 
    }
}
