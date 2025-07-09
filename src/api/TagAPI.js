import { Tag } from '../models/Tag.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TagAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Tag', Tag); 
    }
}
