import { GLBatch } from '../models/GLBatch.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLBatchAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLBatch', GLBatch); 
    }
}
