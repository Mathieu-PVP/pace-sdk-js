import { ComponentType } from '../models/ComponentType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ComponentTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ComponentType', ComponentType); 
    }
}
