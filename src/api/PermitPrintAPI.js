import { PermitPrint } from '../models/PermitPrint.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PermitPrintAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PermitPrint', PermitPrint); 
    }
}
