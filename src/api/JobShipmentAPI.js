import { JobShipment } from '../models/JobShipment.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobShipmentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobShipment', JobShipment); 
    }
}
