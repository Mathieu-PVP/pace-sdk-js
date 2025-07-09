import { ReportParameter } from '../models/ReportParameter.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReportParameterAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ReportParameter', ReportParameter); 
    }
}
