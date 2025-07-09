import { CountryGroupMember } from '../models/CountryGroupMember.js';
import { AbstractAPI } from './AbstractAPI.js';

export class CountryGroupMemberAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'CountryGroupMember', CountryGroupMember); 
    }
}
