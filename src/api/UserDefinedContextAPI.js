import { UserDefinedContext } from '../models/UserDefinedContext.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UserDefinedContextAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UserDefinedContext', UserDefinedContext); 
    }
}
