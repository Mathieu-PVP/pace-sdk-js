import { FoldPattern } from '../models/FoldPattern.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FoldPatternAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'FoldPattern', FoldPattern); 
    }
}
