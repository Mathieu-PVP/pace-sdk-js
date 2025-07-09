import { PrepressItem } from '../models/PrepressItem.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PrepressItemAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PrepressItem', PrepressItem); 
    }
}
