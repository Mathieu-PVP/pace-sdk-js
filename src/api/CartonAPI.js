import { Carton } from '../models/Carton.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CartonAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Carton', Carton); 
    }
}
