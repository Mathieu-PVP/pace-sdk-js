import { DeviceCapability } from '../models/DeviceCapability.js';
import { AbstractAPI } from './AbstractAPI.js';

export class DeviceCapabilityAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'DeviceCapability', DeviceCapability); 
    }
}
