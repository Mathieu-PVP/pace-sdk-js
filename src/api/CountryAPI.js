import { Country } from '../models/Country.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CountryAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Country', Country); 
    }
}
