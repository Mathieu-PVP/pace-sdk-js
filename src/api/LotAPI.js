import { Lot } from '../models/Lot.js';
import { AbstractAPI } from './AbstractAPI.js';

export class LotAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Lot', Lot); 
    }
}
