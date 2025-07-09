import { OptionList } from '../models/OptionList.js';
import { AbstractAPI } from './AbstractAPI.js';

export class OptionListAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'OptionList', OptionList); 
    }
}
