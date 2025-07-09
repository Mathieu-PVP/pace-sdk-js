import { Option } from '../models/Option.js';
import { AbstractAPI } from './AbstractAPI.js';

export class OptionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'Option', Option); 
    }
}
