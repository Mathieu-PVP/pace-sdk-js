import { ShipRateSheetEntry } from '../models/ShipRateSheetEntry.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ShipRateSheetEntryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ShipRateSheetEntry', ShipRateSheetEntry); 
    }
}
