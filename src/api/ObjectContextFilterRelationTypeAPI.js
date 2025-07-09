import { ObjectContextFilterRelationType } from '../models/ObjectContextFilterRelationType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ObjectContextFilterRelationTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ObjectContextFilterRelationType', ObjectContextFilterRelationType); 
    }
}
