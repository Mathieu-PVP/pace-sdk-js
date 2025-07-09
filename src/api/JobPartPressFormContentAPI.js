import { JobPartPressFormContent } from '../models/JobPartPressFormContent.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartPressFormContentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartPressFormContent', JobPartPressFormContent); 
    }
}
