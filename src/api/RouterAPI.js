import { Router } from '../models/Router.js';
import { AbstractAPI } from './AbstractAPI.js';

export class RouterAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Router', Router); 
    }
}
