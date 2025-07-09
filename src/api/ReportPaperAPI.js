import { ReportPaper } from '../models/ReportPaper.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReportPaperAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ReportPaper', ReportPaper); 
    }
}
