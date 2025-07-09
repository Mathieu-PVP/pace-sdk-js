import { PrintCase } from '../models/PrintCase.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PrintCaseAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PrintCase', PrintCase); 
    }
}
