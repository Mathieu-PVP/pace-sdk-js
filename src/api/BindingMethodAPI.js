import { BindingMethod } from '../models/BindingMethod.js';
import { AbstractAPI } from './AbstractAPI.js';

export class BindingMethodAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'BindingMethod', BindingMethod); 
    }
}
