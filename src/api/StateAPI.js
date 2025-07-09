import { State } from '../models/State.js';
import { AbstractAPI } from './AbstractAPI.js';

export class StateAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'State', State); 
    }
}
