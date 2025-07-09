import { PressFeedDirection } from '../models/PressFeedDirection.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PressFeedDirectionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PressFeedDirection', PressFeedDirection); 
    }
}
