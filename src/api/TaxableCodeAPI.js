import { TaxableCode } from '../models/TaxableCode.js';
import { AbstractAPI } from './AbstractAPI.js';

export class TaxableCodeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'TaxableCode', TaxableCode); 
    }
}
