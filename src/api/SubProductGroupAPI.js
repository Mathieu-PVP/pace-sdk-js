import { SubProductGroup } from '../models/SubProductGroup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SubProductGroupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'SubProductGroup', SubProductGroup); 
    }
}
