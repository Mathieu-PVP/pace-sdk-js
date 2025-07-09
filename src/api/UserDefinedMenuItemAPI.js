import { UserDefinedMenuItem } from '../models/UserDefinedMenuItem.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UserDefinedMenuItemAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UserDefinedMenuItem', UserDefinedMenuItem); 
    }
}
