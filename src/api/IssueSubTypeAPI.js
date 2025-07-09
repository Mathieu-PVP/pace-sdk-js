import { IssueSubType } from '../models/IssueSubType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class IssueSubTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'IssueSubType', IssueSubType); 
    }
}
