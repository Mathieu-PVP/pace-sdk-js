import { DSFOrderStatus } from '../models/DSFOrderStatus.js';
import { AbstractAPI } from './AbstractAPI.js';

export class DSFOrderStatusAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'DSFOrderStatus', DSFOrderStatus); 
    }
}
