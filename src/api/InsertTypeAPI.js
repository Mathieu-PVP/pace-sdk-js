import { InsertType } from '../models/InsertType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InsertTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InsertType', InsertType); 
    }
}
