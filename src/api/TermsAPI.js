import { Terms } from '../models/Terms.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TermsAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Terms', Terms); 
    }
}
