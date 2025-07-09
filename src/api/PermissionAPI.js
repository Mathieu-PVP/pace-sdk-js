import { Permission } from '../models/Permission.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PermissionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Permission', Permission); 
    }
}
