import { JobPartSalesDist } from '../models/JobPartSalesDist.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartSalesDistAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartSalesDist', JobPartSalesDist); 
    }
}
