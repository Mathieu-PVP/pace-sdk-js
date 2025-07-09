import { ReportCategory } from '../models/ReportCategory.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReportCategoryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ReportCategory', ReportCategory); 
    }
}
