import { TaxReportPeriodCategorySalesTax } from '../models/TaxReportPeriodCategorySalesTax.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TaxReportPeriodCategorySalesTaxAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'TaxReportPeriodCategorySalesTax', TaxReportPeriodCategorySalesTax); 
    }
}
