import { PaceConnectHeader } from '../models/PaceConnectHeader.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectHeaderAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectHeader', PaceConnectHeader); 
    }
}
