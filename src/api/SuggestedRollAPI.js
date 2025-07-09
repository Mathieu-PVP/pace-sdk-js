import { SuggestedRoll } from '../models/SuggestedRoll.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SuggestedRollAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SuggestedRoll', SuggestedRoll); 
    }
}
