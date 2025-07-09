import { ReportPackageEntry } from '../models/ReportPackageEntry.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReportPackageEntryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ReportPackageEntry', ReportPackageEntry); 
    }
}
