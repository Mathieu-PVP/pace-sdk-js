import { UserDefinedIncludableForm } from '../models/UserDefinedIncludableForm.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UserDefinedIncludableFormAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UserDefinedIncludableForm', UserDefinedIncludableForm); 
    }
}
