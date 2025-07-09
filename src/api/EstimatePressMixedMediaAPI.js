import { EstimatePressMixedMedia } from '../models/EstimatePressMixedMedia.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimatePressMixedMediaAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimatePressMixedMedia', EstimatePressMixedMedia); 
    }
}
