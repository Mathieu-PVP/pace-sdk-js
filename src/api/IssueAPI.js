import { Issue } from '../models/Issue.js';
import { AbstractAPI } from './AbstractAPI.js';

export class IssueAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Issue', Issue); 
    }
}
