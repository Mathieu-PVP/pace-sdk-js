import { PrintRunMethod } from '../models/PrintRunMethod.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PrintRunMethodAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PrintRunMethod', PrintRunMethod); 
    }
}
