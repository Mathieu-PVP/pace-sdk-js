import { ReportPrinter } from '../models/ReportPrinter.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReportPrinterAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ReportPrinter', ReportPrinter); 
    }
}
