import { Contact } from '../models/Contact.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ContactAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Contact', Contact); 
    }
}
