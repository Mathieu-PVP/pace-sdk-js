import { TaxReport } from '../models/TaxReport.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TaxReportAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'TaxReport', TaxReport); 
    }
}
