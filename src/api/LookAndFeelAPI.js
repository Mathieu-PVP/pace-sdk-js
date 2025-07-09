import { LookAndFeel } from '../models/LookAndFeel.js';
import { AbstractAPI } from './AbstractAPI.js';

export class LookAndFeelAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'LookAndFeel', LookAndFeel); 
    }
}
