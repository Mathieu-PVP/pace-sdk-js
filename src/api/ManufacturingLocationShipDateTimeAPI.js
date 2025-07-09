import { ManufacturingLocationShipDateTime } from '../models/ManufacturingLocationShipDateTime.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ManufacturingLocationShipDateTimeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ManufacturingLocationShipDateTime', ManufacturingLocationShipDateTime); 
    }
}
