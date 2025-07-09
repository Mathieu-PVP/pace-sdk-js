import { JobPartPressFormMixedMedia } from '../models/JobPartPressFormMixedMedia.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobPartPressFormMixedMediaAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobPartPressFormMixedMedia', JobPartPressFormMixedMedia); 
    }
}
