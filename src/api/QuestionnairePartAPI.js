import { QuestionnairePart } from '../models/QuestionnairePart.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuestionnairePartAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuestionnairePart', QuestionnairePart); 
    }
}
