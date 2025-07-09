import { FacebookAccount } from '../models/FacebookAccount.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FacebookAccountAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FacebookAccount', FacebookAccount); 
    }
}
