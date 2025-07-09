import { EstimateQuantityContributionAnalysis } from '../models/EstimateQuantityContributionAnalysis.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EstimateQuantityContributionAnalysisAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EstimateQuantityContributionAnalysis', EstimateQuantityContributionAnalysis); 
    }
}
