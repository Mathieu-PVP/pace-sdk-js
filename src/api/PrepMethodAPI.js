import { PrepMethod } from '../models/PrepMethod.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PrepMethodAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PrepMethod', PrepMethod); 
    }
}
