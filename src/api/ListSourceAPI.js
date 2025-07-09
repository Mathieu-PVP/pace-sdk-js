import { ListSource } from '../models/ListSource.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ListSourceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ListSource', ListSource); 
    }
}
