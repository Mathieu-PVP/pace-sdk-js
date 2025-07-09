import { ObjectContextSecurityFilter } from '../models/ObjectContextSecurityFilter.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ObjectContextSecurityFilterAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ObjectContextSecurityFilter', ObjectContextSecurityFilter); 
    }
}
