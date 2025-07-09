import { PressType } from '../models/PressType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PressTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PressType', PressType); 
    }
}
