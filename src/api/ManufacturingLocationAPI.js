import { ManufacturingLocation } from '../models/ManufacturingLocation.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ManufacturingLocationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ManufacturingLocation', ManufacturingLocation); 
    }
}
