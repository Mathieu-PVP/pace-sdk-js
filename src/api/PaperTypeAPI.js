import { PaperType } from '../models/PaperType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaperTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaperType', PaperType); 
    }
}
