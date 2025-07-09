import { UserDefinedView } from '../models/UserDefinedView.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UserDefinedViewAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UserDefinedView', UserDefinedView); 
    }
}
