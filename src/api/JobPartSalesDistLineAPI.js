import { JobPartSalesDistLine } from '../models/JobPartSalesDistLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartSalesDistLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartSalesDistLine', JobPartSalesDistLine); 
    }
}
