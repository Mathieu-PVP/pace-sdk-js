import { JobPartPressFormInk } from '../models/JobPartPressFormInk.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartPressFormInkAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartPressFormInk', JobPartPressFormInk); 
    }
}
