import { Skid } from '../models/Skid.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SkidAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Skid', Skid); 
    }
}
