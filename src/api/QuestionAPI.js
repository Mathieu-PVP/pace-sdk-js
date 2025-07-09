import { Question } from '../models/Question.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuestionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Question', Question); 
    }
}
