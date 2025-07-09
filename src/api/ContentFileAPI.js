import { ContentFile } from '../models/ContentFile.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ContentFileAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ContentFile', ContentFile); 
    }
}
