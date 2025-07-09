import { ImportElement } from '../models/ImportElement.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ImportElementAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ImportElement', ImportElement); 
    }
}
