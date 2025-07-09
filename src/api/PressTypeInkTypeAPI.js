import { PressTypeInkType } from '../models/PressTypeInkType.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PressTypeInkTypeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PressTypeInkType', PressTypeInkType); 
    }
}
