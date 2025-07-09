import { ReportVersionCategory } from '../models/ReportVersionCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReportVersionCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ReportVersionCategory', ReportVersionCategory); 
    }
}
