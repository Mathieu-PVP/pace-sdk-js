import { PostageType } from '../models/PostageType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PostageTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PostageType', PostageType); 
    }
}
