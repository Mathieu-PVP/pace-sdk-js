import { ReportFile } from '../models/ReportFile.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReportFileAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ReportFile', ReportFile); 
    }
}
