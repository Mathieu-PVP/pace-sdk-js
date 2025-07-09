import { PaperSize } from '../models/PaperSize.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaperSizeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaperSize', PaperSize); 
    }
}
