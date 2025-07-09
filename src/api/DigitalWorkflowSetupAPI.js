import { DigitalWorkflowSetup } from '../models/DigitalWorkflowSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class DigitalWorkflowSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'DigitalWorkflowSetup', DigitalWorkflowSetup); 
    }
}
