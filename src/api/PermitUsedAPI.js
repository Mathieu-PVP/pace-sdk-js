import { PermitUsed } from '../models/PermitUsed.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PermitUsedAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PermitUsed', PermitUsed); 
    }
}
