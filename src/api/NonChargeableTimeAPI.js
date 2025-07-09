import { NonChargeableTime } from '../models/NonChargeableTime.js';
import { AbstractAPI } from './AbstractAPI.js';

export class NonChargeableTimeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'NonChargeableTime', NonChargeableTime); 
    }
}
