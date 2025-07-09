import { JoinedGroup } from '../models/JoinedGroup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JoinedGroupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JoinedGroup', JoinedGroup); 
    }
}
