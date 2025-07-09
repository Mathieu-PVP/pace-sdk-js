import { DetailUOM } from '../models/DetailUOM.js';
import { AbstractAPI } from './AbstractAPI.js';

export class DetailUOMAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'DetailUOM', DetailUOM); 
    }
}
