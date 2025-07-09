import { IssueStatus } from '../models/IssueStatus.js';
import { AbstractAPI } from './AbstractAPI.js';

export class IssueStatusAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'IssueStatus', IssueStatus); 
    }
}
