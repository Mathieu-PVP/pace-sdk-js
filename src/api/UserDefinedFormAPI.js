import { UserDefinedForm } from '../models/UserDefinedForm.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UserDefinedFormAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UserDefinedForm', UserDefinedForm); 
    }
}
