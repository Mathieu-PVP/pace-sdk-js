import { Padding } from '../models/Padding.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaddingAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Padding', Padding); 
    }
}
