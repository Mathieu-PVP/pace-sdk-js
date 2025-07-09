import { TwitterAccount } from '../models/TwitterAccount.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TwitterAccountAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'TwitterAccount', TwitterAccount); 
    }
}
