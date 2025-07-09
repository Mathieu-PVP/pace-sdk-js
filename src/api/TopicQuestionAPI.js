import { TopicQuestion } from '../models/TopicQuestion.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TopicQuestionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'TopicQuestion', TopicQuestion); 
    }
}
