import { PrintType } from '../models/PrintType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PrintTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PrintType', PrintType); 
    }
}
