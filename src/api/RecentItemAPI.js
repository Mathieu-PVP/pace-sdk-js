import { RecentItem } from '../models/RecentItem.js';
import { AbstractAPI } from './AbstractAPI.js';

export class RecentItemAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'RecentItem', RecentItem); 
    }
}
