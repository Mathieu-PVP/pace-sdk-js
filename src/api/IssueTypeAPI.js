import { IssueType } from '../models/IssueType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class IssueTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'IssueType', IssueType); 
    }
}
