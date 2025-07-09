import { Font } from '../models/Font.js';
import { AbstractAPI } from './AbstractAPI.js';

export class FontAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Font', Font); 
    }
}
