import { IssueComment } from '../models/IssueComment.js';
import { AbstractAPI } from './AbstractAPI.js';

export class IssueCommentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'IssueComment', IssueComment); 
    }
}
