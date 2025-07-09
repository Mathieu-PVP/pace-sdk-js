import { UserForm } from '../models/UserForm.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UserFormAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UserForm', UserForm); 
    }
}
