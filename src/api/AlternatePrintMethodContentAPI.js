import { AlternatePrintMethodContent } from '../models/AlternatePrintMethodContent.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AlternatePrintMethodContentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AlternatePrintMethodContent', AlternatePrintMethodContent); 
    }
}
