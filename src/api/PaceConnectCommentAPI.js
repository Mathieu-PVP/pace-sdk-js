import { PaceConnectComment } from '../models/PaceConnectComment.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectCommentAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectComment', PaceConnectComment); 
    }
}
