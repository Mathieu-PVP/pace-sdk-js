import { PrepActivity } from '../models/PrepActivity.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PrepActivityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PrepActivity', PrepActivity); 
    }
}
