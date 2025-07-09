import { JobProduct } from '../models/JobProduct.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobProductAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobProduct', JobProduct); 
    }
}
