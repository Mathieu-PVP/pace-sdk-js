import { CountryGroup } from '../models/CountryGroup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CountryGroupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CountryGroup', CountryGroup); 
    }
}
