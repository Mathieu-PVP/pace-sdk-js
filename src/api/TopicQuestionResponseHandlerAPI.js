import { TopicQuestionResponseHandler } from '../models/TopicQuestionResponseHandler.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TopicQuestionResponseHandlerAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'TopicQuestionResponseHandler', TopicQuestionResponseHandler); 
    }
}
