import { CSR } from '../models/CSR.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CSRAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CSR', CSR); 
    }
}
