import { AddressFormat } from '../models/AddressFormat.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AddressFormatAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AddressFormat', AddressFormat); 
    }
}
