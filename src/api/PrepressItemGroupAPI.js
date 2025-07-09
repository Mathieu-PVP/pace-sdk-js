import { PrepressItemGroup } from '../models/PrepressItemGroup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PrepressItemGroupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PrepressItemGroup', PrepressItemGroup); 
    }
}
