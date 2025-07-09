import { ExternalBODPrimaryKeyReference } from '../models/ExternalBODPrimaryKeyReference.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ExternalBODPrimaryKeyReferenceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ExternalBODPrimaryKeyReference', ExternalBODPrimaryKeyReference); 
    }
}
