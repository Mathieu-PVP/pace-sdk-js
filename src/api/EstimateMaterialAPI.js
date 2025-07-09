import { EstimateMaterial } from '../models/EstimateMaterial.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateMaterialAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateMaterial', EstimateMaterial); 
    }
}
