import { Plate } from '../models/Plate.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PlateAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Plate', Plate); 
    }
}
