import { RevenueType } from '../models/RevenueType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class RevenueTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'RevenueType', RevenueType); 
    }
}
