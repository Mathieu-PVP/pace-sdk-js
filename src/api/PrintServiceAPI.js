import { PrintService } from '../models/PrintService.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PrintServiceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PrintService', PrintService); 
    }
}
