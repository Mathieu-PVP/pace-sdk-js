import { TaxReportCategory } from '../models/TaxReportCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TaxReportCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'TaxReportCategory', TaxReportCategory); 
    }
}
