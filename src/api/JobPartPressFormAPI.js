import { JobPartPressForm } from '../models/JobPartPressForm.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartPressFormAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartPressForm', JobPartPressForm); 
    }
}
