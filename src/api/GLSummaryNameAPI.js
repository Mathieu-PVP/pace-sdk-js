import { GLSummaryName } from '../models/GLSummaryName.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLSummaryNameAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLSummaryName', GLSummaryName); 
    }
}
