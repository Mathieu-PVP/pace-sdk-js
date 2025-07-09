import { ReturnPrint } from '../models/ReturnPrint.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReturnPrintAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ReturnPrint', ReturnPrint); 
    }
}
