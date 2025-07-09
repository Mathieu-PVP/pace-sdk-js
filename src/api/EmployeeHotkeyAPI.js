import { EmployeeHotkey } from '../models/EmployeeHotkey.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EmployeeHotkeyAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EmployeeHotkey', EmployeeHotkey); 
    }
}
