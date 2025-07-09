import { UserInterfaceSet } from '../models/UserInterfaceSet.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UserInterfaceSetAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UserInterfaceSet', UserInterfaceSet); 
    }
}
