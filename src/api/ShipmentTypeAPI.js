import { ShipmentType } from '../models/ShipmentType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ShipmentTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ShipmentType', ShipmentType); 
    }
}
