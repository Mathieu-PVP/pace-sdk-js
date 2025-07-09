import { PaceConnectExpressionMap } from '../models/PaceConnectExpressionMap.js';
import { AbstractAPI } from './AbstractAPI.js';

export class PaceConnectExpressionMapAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'PaceConnectExpressionMap', PaceConnectExpressionMap); 
    }
}
