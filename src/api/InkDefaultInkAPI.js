import { InkDefaultInk } from '../models/InkDefaultInk.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InkDefaultInkAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InkDefaultInk', InkDefaultInk); 
    }
}
