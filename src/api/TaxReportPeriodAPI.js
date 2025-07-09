import { TaxReportPeriod } from '../models/TaxReportPeriod.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TaxReportPeriodAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'TaxReportPeriod', TaxReportPeriod); 
    }
}
