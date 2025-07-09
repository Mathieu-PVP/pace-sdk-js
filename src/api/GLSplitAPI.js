import { GLSplit } from '../models/GLSplit.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLSplitAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLSplit', GLSplit); 
    }
}
