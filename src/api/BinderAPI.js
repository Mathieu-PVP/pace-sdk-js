import { Binder } from '../models/Binder.js';
import { AbstractAPI } from './AbstractAPI.js';

export class BinderAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Binder', Binder); 
    }
}
