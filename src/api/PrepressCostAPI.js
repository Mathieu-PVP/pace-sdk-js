import { PrepressCost } from '../models/PrepressCost.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PrepressCostAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PrepressCost', PrepressCost); 
    }
}
