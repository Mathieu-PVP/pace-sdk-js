import { DSFMediaSize } from '../models/DSFMediaSize.js';
import { AbstractAPI } from './AbstractAPI.js';

export class DSFMediaSizeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'DSFMediaSize', DSFMediaSize); 
    }
}
