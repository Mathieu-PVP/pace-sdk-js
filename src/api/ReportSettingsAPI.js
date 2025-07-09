import { ReportSettings } from '../models/ReportSettings.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReportSettingsAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ReportSettings', ReportSettings); 
    }
}
