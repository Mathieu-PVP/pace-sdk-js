import { PressConsoleButton } from '../models/PressConsoleButton.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PressConsoleButtonAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PressConsoleButton', PressConsoleButton); 
    }
}
