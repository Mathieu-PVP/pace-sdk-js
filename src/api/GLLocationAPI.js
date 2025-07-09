import { GLLocation } from '../models/GLLocation.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLLocationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLLocation', GLLocation); 
    }
}
