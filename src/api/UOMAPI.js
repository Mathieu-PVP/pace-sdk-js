import { UOM } from '../models/UOM.js';
import { AbstractAPI } from './AbstractAPI.js';

export class UOMAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'UOM', UOM); 
    }
}
