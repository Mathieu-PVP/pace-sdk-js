import { Report } from '../models/Report.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReportAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Report', Report); 
    }
}
