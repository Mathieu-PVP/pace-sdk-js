import { PressInkType } from '../models/PressInkType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PressInkTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PressInkType', PressInkType); 
    }
}
