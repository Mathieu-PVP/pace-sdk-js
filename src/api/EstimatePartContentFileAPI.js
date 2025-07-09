import { EstimatePartContentFile } from '../models/EstimatePartContentFile.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimatePartContentFileAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimatePartContentFile', EstimatePartContentFile); 
    }
}
