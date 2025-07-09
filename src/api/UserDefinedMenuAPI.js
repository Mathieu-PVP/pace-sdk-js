import { UserDefinedMenu } from '../models/UserDefinedMenu.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UserDefinedMenuAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UserDefinedMenu', UserDefinedMenu); 
    }
}
