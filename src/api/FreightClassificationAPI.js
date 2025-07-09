import { FreightClassification } from '../models/FreightClassification.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FreightClassificationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FreightClassification', FreightClassification); 
    }
}
