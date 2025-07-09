import { ShipProvider } from '../models/ShipProvider.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ShipProviderAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ShipProvider', ShipProvider); 
    }
}
