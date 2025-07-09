import { IssueResolution } from '../models/IssueResolution.js';
import { AbstractAPI } from './AbstractAPI.js';

export class IssueResolutionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'IssueResolution', IssueResolution); 
    }
}
