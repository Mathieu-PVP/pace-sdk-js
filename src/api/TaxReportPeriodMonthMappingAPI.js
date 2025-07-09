import { TaxReportPeriodMonthMapping } from '../models/TaxReportPeriodMonthMapping.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TaxReportPeriodMonthMappingAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'TaxReportPeriodMonthMapping', TaxReportPeriodMonthMapping); 
    }
}
