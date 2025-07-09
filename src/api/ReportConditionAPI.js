import { ReportCondition } from '../models/ReportCondition.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ReportConditionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ReportCondition', ReportCondition); 
    }
}
