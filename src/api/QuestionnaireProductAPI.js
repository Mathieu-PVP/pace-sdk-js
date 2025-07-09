import { QuestionnaireProduct } from '../models/QuestionnaireProduct.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuestionnaireProductAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuestionnaireProduct', QuestionnaireProduct); 
    }
}
