import { EstimateShipment } from '../models/EstimateShipment.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateShipmentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateShipment', EstimateShipment); 
    }
}
