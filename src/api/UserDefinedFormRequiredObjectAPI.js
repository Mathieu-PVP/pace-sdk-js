import { UserDefinedFormRequiredObject } from '../models/UserDefinedFormRequiredObject.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UserDefinedFormRequiredObjectAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UserDefinedFormRequiredObject', UserDefinedFormRequiredObject); 
    }
}
