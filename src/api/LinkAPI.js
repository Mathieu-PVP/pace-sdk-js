import { Link } from '../models/Link.js';
import { AbstractAPI } from './AbstractAPI.js';

export class LinkAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Link', Link); 
    }
}
