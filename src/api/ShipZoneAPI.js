import { ShipZone } from '../models/ShipZone.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ShipZoneAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ShipZone', ShipZone); 
    }
}
