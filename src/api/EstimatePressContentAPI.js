import { EstimatePressContent } from '../models/EstimatePressContent.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimatePressContentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimatePressContent', EstimatePressContent); 
    }
}
