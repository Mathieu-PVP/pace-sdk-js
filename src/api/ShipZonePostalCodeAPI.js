import { ShipZonePostalCode } from '../models/ShipZonePostalCode.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ShipZonePostalCodeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ShipZonePostalCode', ShipZonePostalCode); 
    }
}
