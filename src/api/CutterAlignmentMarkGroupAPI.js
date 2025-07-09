import { CutterAlignmentMarkGroup } from '../models/CutterAlignmentMarkGroup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CutterAlignmentMarkGroupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CutterAlignmentMarkGroup', CutterAlignmentMarkGroup); 
    }
}
