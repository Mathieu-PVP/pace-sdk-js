import { ShipVia } from '../models/ShipVia.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ShipViaAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ShipVia', ShipVia); 
    }
}
