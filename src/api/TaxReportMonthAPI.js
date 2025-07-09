import { TaxReportMonth } from '../models/TaxReportMonth.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TaxReportMonthAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'TaxReportMonth', TaxReportMonth); 
    }
}
