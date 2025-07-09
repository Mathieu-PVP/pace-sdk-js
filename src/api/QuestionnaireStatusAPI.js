import { QuestionnaireStatus } from '../models/QuestionnaireStatus.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuestionnaireStatusAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuestionnaireStatus', QuestionnaireStatus); 
    }
}
