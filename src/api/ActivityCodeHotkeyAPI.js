import { ActivityCodeHotkey } from '../models/ActivityCodeHotkey.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ActivityCodeHotkeyAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ActivityCodeHotkey', ActivityCodeHotkey); 
    }
}
