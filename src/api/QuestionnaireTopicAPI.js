import { QuestionnaireTopic } from '../models/QuestionnaireTopic.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuestionnaireTopicAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuestionnaireTopic', QuestionnaireTopic); 
    }
}
