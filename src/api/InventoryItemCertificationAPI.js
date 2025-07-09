import { InventoryItemCertification } from '../models/InventoryItemCertification.js';
import { AbstractAPI } from './AbstractAPI.js';

export class InventoryItemCertificationAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'InventoryItemCertification', InventoryItemCertification); 
    }
}
