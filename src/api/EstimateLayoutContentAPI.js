import { EstimateLayoutContent } from '../models/EstimateLayoutContent.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateLayoutContentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateLayoutContent', EstimateLayoutContent); 
    }
}
