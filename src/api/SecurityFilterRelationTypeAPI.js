import { SecurityFilterRelationType } from '../models/SecurityFilterRelationType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SecurityFilterRelationTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SecurityFilterRelationType', SecurityFilterRelationType); 
    }
}
