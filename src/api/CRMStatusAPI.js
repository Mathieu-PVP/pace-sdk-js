import { CRMStatus } from '../models/CRMStatus.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CRMStatusAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CRMStatus', CRMStatus); 
    }
}
