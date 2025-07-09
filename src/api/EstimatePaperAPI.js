import { EstimatePaper } from '../models/EstimatePaper.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimatePaperAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimatePaper', EstimatePaper); 
    }
}
