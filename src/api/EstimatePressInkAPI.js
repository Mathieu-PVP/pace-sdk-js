import { EstimatePressInk } from '../models/EstimatePressInk.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimatePressInkAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimatePressInk', EstimatePressInk); 
    }
}
