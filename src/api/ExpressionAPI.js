import { Expression } from '../models/Expression.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ExpressionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Expression', Expression); 
    }
}
