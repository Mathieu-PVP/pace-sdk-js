import { AttachmentSetup } from '../models/AttachmentSetup.js';
import { AbstractAPI } from './AbstractAPI.js';

export class AttachmentSetupAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'AttachmentSetup', AttachmentSetup); 
    }
}
