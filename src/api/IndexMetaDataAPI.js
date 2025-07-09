import { IndexMetaData } from '../models/IndexMetaData.js';
import { AbstractAPI } from './AbstractAPI.js';

export class IndexMetaDataAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'IndexMetaData', IndexMetaData); 
    }
}
