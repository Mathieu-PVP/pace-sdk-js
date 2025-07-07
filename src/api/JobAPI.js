import { Job } from '../models/Job.js';

export class JobAPI {
    constructor(client) {
        this.client = client;
    }

    /**
     * Récupérer tous les jobs
     *
     * @param {object} { xpath }
     * @return {Job[]} 
     * @memberof JobAPI
     */
    async findAll({ xpath }) {
        const data = await this.client.request('/FindObjects/find', 'GET', null, {
            type: 'Job',
            xpath,
        });
        const jobPromises = data.map((jobId) => this.readById(jobId));
        return Promise.all(jobPromises);
    }


    /**
     * Récupérer un job à partir de son ID
     *
     * @param {string|number} primaryKey la clé étrangère du job
     * @param {*} [txnId=null]
     * @return {Job} le job concerné
     * @memberof JobAPI
     */
    async readById(primaryKey, txnId = null) {
        const query = { primaryKey };
        if (txnId) query.txnId = txnId;
        const data = await this.client.request('/ReadObject/readJob', 'POST', {}, query);
        return new Job(data);
    }

    /**
     * Mettre à jour un job
     *
     * @param {Job} jobInstance l'instance du job
     * @return {Job} le job avec les données mises à jour
     * @memberof JobAPI
     */
    async update(jobInstance = this) {
        const payload = jobInstance.toJSON();
        const updatedData = await this.client.request('/UpdateObject/updateJob', 'POST', payload);
        return new Job(updatedData);
    }
}