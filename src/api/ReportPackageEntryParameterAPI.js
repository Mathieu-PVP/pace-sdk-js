import { ReportPackageEntryParameter } from '../models/ReportPackageEntryParameter.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReportPackageEntryParameterAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ReportPackageEntryParameter', ReportPackageEntryParameter); 
    }
}
