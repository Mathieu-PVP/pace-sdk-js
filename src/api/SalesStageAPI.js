import { SalesStage } from '../models/SalesStage.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SalesStageAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SalesStage', SalesStage); 
    }
}
