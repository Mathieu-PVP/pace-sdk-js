import { Printer } from '../models/Printer.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PrinterAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Printer', Printer); 
    }
}
