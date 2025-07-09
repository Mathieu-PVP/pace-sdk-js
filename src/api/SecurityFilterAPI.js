import { SecurityFilter } from '../models/SecurityFilter.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SecurityFilterAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SecurityFilter', SecurityFilter); 
    }
}
