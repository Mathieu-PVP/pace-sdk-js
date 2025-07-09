import { NonChargeableType } from '../models/NonChargeableType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class NonChargeableTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'NonChargeableType', NonChargeableType); 
    }
}
