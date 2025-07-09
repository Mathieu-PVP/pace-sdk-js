import { ShipmentDistribution } from '../models/ShipmentDistribution.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ShipmentDistributionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ShipmentDistribution', ShipmentDistribution); 
    }
}
