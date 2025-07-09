import { QuestionnaireType } from '../models/QuestionnaireType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuestionnaireTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuestionnaireType', QuestionnaireType); 
    }
}
