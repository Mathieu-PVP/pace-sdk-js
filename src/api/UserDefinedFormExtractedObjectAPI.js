import { UserDefinedFormExtractedObject } from '../models/UserDefinedFormExtractedObject.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UserDefinedFormExtractedObjectAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UserDefinedFormExtractedObject', UserDefinedFormExtractedObject); 
    }
}
