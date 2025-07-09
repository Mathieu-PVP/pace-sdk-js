import { ContentFileContour } from '../models/ContentFileContour.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ContentFileContourAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ContentFileContour', ContentFileContour); 
    }
}
