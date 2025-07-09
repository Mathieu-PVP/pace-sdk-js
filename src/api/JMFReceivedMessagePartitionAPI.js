import { JMFReceivedMessagePartition } from '../models/JMFReceivedMessagePartition.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JMFReceivedMessagePartitionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JMFReceivedMessagePartition', JMFReceivedMessagePartition); 
    }
}
