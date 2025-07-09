import { AlternatePrintMethod } from '../models/AlternatePrintMethod.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AlternatePrintMethodAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AlternatePrintMethod', AlternatePrintMethod); 
    }
}
