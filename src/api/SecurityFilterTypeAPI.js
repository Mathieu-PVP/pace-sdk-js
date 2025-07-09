import { SecurityFilterType } from '../models/SecurityFilterType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SecurityFilterTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SecurityFilterType', SecurityFilterType); 
    }
}
