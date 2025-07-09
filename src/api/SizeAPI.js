import { Size } from '../models/Size.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SizeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Size', Size); 
    }
}
