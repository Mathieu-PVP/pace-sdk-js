import { ChangeOrderType } from '../models/ChangeOrderType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ChangeOrderTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ChangeOrderType', ChangeOrderType); 
    }
}
