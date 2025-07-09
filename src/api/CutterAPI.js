import { Cutter } from '../models/Cutter.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CutterAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Cutter', Cutter); 
    }
}
