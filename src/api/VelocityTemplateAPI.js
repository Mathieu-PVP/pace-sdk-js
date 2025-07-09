import { VelocityTemplate } from '../models/VelocityTemplate.js';
import { AbstractAPI } from './AbstractAPI.js';

export class VelocityTemplateAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'VelocityTemplate', VelocityTemplate); 
    }
}
