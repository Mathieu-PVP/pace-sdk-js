import { VirtualPrinter } from '../models/VirtualPrinter.js';
import { AbstractAPI } from './AbstractAPI.js';

export class VirtualPrinterAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'VirtualPrinter', VirtualPrinter); 
    }
}
