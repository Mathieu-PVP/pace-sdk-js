import { GLScheduleLine } from '../models/GLScheduleLine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GLScheduleLineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GLScheduleLine', GLScheduleLine); 
    }
}
