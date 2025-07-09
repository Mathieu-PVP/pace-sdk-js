import { RSSChannel } from '../models/RSSChannel.js';
import { AbstractAPI } from './AbstractAPI.js';

export class RSSChannelAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'RSSChannel', RSSChannel); 
    }
}
