import { RoutingTemplate } from '../models/RoutingTemplate.js';
import { AbstractAPI } from './AbstractAPI.js';

export class RoutingTemplateAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'RoutingTemplate', RoutingTemplate); 
    }
}
