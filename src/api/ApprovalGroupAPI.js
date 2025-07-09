import { ApprovalGroup } from '../models/ApprovalGroup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ApprovalGroupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ApprovalGroup', ApprovalGroup); 
    }
}
