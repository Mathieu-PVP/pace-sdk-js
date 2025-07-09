import { PrinterSettings } from '../models/PrinterSettings.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PrinterSettingsAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PrinterSettings', PrinterSettings); 
    }
}
