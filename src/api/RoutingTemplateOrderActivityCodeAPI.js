import { RoutingTemplateOrderActivityCode } from '../models/RoutingTemplateOrderActivityCode.js';
import { AbstractAPI } from './AbstractAPI.js';

export class RoutingTemplateOrderActivityCodeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'RoutingTemplateOrderActivityCode', RoutingTemplateOrderActivityCode); 
    }
}
