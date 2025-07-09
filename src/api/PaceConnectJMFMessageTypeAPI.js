import { PaceConnectJMFMessageType } from '../models/PaceConnectJMFMessageType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectJMFMessageTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectJMFMessageType', PaceConnectJMFMessageType); 
    }
}
