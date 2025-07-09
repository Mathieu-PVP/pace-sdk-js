import { PressEvent } from '../models/PressEvent.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PressEventAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PressEvent', PressEvent); 
    }
}
