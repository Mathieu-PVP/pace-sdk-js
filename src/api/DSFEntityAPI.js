import { DSFEntity } from '../models/DSFEntity.js';
import { AbstractAPI } from './AbstractAPI.js';

export class DSFEntityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'DSFEntity', DSFEntity); 
    }
}
