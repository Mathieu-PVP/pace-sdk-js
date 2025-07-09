import { PaperTypeActivity } from '../models/PaperTypeActivity.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaperTypeActivityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaperTypeActivity', PaperTypeActivity); 
    }
}
