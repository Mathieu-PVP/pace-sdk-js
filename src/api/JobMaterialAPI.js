import { JobMaterial } from '../models/JobMaterial.js';
import { AbstractAPI } from './AbstractAPI.js';

export class JobMaterialAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'JobMaterial', JobMaterial); 
    }
}
