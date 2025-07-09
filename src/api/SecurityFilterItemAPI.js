import { SecurityFilterItem } from '../models/SecurityFilterItem.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SecurityFilterItemAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SecurityFilterItem', SecurityFilterItem); 
    }
}
