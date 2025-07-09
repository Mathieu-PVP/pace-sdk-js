import { TaxReportPeriodCategory } from '../models/TaxReportPeriodCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TaxReportPeriodCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'TaxReportPeriodCategory', TaxReportPeriodCategory); 
    }
}
