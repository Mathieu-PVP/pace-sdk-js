import { ImportControl } from '../models/ImportControl.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ImportControlAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ImportControl', ImportControl); 
    }
}
