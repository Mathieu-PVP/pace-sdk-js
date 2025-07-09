import { Ink } from '../models/Ink.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InkAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Ink', Ink); 
    }
}
