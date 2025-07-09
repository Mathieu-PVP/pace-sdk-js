import { Topic } from '../models/Topic.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TopicAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Topic', Topic); 
    }
}
