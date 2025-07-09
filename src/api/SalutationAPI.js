import { Salutation } from '../models/Salutation.js';
import { AbstractAPI } from './AbstractAPI.js';

export class SalutationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Salutation', Salutation); 
    }
}
