import { MetrixCutterOperation } from '../models/MetrixCutterOperation.js';
import { AbstractAPI } from './AbstractAPI.js';

export class MetrixCutterOperationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'MetrixCutterOperation', MetrixCutterOperation); 
    }
}
