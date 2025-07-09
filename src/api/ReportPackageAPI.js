import { ReportPackage } from '../models/ReportPackage.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReportPackageAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ReportPackage', ReportPackage); 
    }
}
