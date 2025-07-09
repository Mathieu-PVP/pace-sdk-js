import { Distribution } from '../models/Distribution.js';
import { AbstractAPI } from './AbstractAPI.js';

export class DistributionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Distribution', Distribution); 
    }
}
