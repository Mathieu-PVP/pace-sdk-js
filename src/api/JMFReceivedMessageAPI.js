import { JMFReceivedMessage } from '../models/JMFReceivedMessage.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JMFReceivedMessageAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JMFReceivedMessage', JMFReceivedMessage); 
    }
}
