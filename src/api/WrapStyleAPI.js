import { WrapStyle } from '../models/WrapStyle.js';
import { AbstractAPI } from './AbstractAPI.js';

export class WrapStyleAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'WrapStyle', WrapStyle); 
    }
}
