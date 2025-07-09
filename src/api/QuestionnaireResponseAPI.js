import { QuestionnaireResponse } from '../models/QuestionnaireResponse.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuestionnaireResponseAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuestionnaireResponse', QuestionnaireResponse); 
    }
}
