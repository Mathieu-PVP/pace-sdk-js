import { SourceType } from '../models/SourceType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SourceTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SourceType', SourceType); 
    }
}
