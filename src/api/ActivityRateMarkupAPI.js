import { ActivityRateMarkup } from '../models/ActivityRateMarkup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ActivityRateMarkupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ActivityRateMarkup', ActivityRateMarkup); 
    }
}
