import { StandardPaperType } from '../models/StandardPaperType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class StandardPaperTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'StandardPaperType', StandardPaperType); 
    }
}
