import { QuoteComponent } from '../models/QuoteComponent.js';
import { AbstractAPI } from './AbstractAPI.js';

export class QuoteComponentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'QuoteComponent', QuoteComponent); 
    }
}
