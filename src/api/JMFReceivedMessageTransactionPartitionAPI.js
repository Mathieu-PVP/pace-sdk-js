import { JMFReceivedMessageTransactionPartition } from '../models/JMFReceivedMessageTransactionPartition.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JMFReceivedMessageTransactionPartitionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JMFReceivedMessageTransactionPartition', JMFReceivedMessageTransactionPartition); 
    }
}
