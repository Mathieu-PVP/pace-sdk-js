import { SystemGroup } from '../models/SystemGroup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SystemGroupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SystemGroup', SystemGroup); 
    }
}
