import { CartonContent } from '../models/CartonContent.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CartonContentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CartonContent', CartonContent); 
    }
}
