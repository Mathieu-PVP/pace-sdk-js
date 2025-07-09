import { DunningLetter } from '../models/DunningLetter.js';
import { AbstractAPI } from './AbstractAPI.js';

export class DunningLetterAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'DunningLetter', DunningLetter); 
    }
}
