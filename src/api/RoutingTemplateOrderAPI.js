import { RoutingTemplateOrder } from '../models/RoutingTemplateOrder.js';
import { AbstractAPI } from './AbstractAPI.js';

export class RoutingTemplateOrderAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'RoutingTemplateOrder', RoutingTemplateOrder); 
    }
}
