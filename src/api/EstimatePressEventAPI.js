import { EstimatePressEvent } from '../models/EstimatePressEvent.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimatePressEventAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimatePressEvent', EstimatePressEvent); 
    }
}
