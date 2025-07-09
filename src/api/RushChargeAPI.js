import { RushCharge } from '../models/RushCharge.js';
import { AbstractAPI } from './AbstractAPI.js';

export class RushChargeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'RushCharge', RushCharge); 
    }
}
