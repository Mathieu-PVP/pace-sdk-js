import { Press } from '../models/Press.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PressAPI extends AbstractAPI {
    constructor(client) {
        super(client, 'Press', Press);
    }
}