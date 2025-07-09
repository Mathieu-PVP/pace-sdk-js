import { EstimatePrepressOp } from '../models/EstimatePrepressOp.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimatePrepressOpAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimatePrepressOp', EstimatePrepressOp); 
    }
}
