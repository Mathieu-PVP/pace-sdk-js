import { Recurrence } from '../models/Recurrence.js';
import { AbstractAPI } from './AbstractAPI.js';

export class RecurrenceAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Recurrence', Recurrence); 
    }
}
