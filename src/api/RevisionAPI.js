import { Revision } from '../models/Revision.js';
import { AbstractAPI } from './AbstractAPI.js';

export class RevisionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Revision', Revision); 
    }
}
