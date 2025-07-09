import { JMFReceivedMessageTransaction } from '../models/JMFReceivedMessageTransaction.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JMFReceivedMessageTransactionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JMFReceivedMessageTransaction', JMFReceivedMessageTransaction); 
    }
}
