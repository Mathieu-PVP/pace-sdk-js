import { JobPartPressFormEvent } from '../models/JobPartPressFormEvent.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartPressFormEventAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartPressFormEvent', JobPartPressFormEvent); 
    }
}
