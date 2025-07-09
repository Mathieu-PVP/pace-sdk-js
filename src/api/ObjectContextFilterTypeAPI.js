import { ObjectContextFilterType } from '../models/ObjectContextFilterType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ObjectContextFilterTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ObjectContextFilterType', ObjectContextFilterType); 
    }
}
