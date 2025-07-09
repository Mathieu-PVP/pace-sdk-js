import { MasterBillOfLading } from '../models/MasterBillOfLading.js';
import { AbstractAPI } from './AbstractAPI.js';

export class MasterBillOfLadingAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'MasterBillOfLading', MasterBillOfLading); 
    }
}
