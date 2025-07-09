import { BinderSpeed } from '../models/BinderSpeed.js';
import { AbstractAPI } from './AbstractAPI.js';

export class BinderSpeedAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'BinderSpeed', BinderSpeed); 
    }
}
