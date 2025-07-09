import { PrinterPaperMapping } from '../models/PrinterPaperMapping.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PrinterPaperMappingAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PrinterPaperMapping', PrinterPaperMapping); 
    }
}
