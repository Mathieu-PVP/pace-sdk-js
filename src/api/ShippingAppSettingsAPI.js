import { ShippingAppSettings } from '../models/ShippingAppSettings.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ShippingAppSettingsAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ShippingAppSettings', ShippingAppSettings); 
    }
}
