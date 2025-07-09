import { RelayDateTime } from '../models/RelayDateTime.js';
import { AbstractAPI } from './AbstractAPI.js';

export class RelayDateTimeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'RelayDateTime', RelayDateTime); 
    }
}
