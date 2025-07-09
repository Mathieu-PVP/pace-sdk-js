import { MetrixFoldPattern } from '../models/MetrixFoldPattern.js';
import { AbstractAPI } from './AbstractAPI.js';

export class MetrixFoldPatternAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'MetrixFoldPattern', MetrixFoldPattern); 
    }
}
