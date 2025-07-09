import { PrepressSize } from '../models/PrepressSize.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PrepressSizeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PrepressSize', PrepressSize); 
    }
}
