import { GenericFinishingMachine } from '../models/GenericFinishingMachine.js';
import { AbstractAPI } from './AbstractAPI.js';

export class GenericFinishingMachineAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'GenericFinishingMachine', GenericFinishingMachine); 
    }
}
