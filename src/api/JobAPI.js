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
     * Récupérer X à Y jobs à partir d'une requête personnalisée
     *
     * @param {object} { xpath, offset, limit, txnId = null, xpathSorts = [] }
     * @return {Job[]} 
     * @memberof JobAPI
     */
    async findSortAndLimit({ xpath, offset, limit, txnId = null, xpathSorts = [] }) {
        const query = { type: 'Job', xpath, offset, limit };
        if (txnId) query.txnId = txnId;
        const data = await this.client.request('/FindObjects/findSortAndLimit', 'POST', xpathSorts, query);
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
    async update(jobInstance) {
        const payload = jobInstance.toJSON();
        const updatedData = await this.client.request('/UpdateObject/updateJob', 'POST', payload);
        return new Job(updatedData);
    }

    /**
     * Cloner un job
     *
     * @param {string} keyOfObjectToClone Clé primaire du job à cloner
     * @param {string} newParentKey Clé primaire du client à qui appartiendra le job
     * @param {string} [txnId=null]
     * @param {Job} jobInstance l'instance du job à cloner avec des modifications (facultatif)
     * @return {Job} Le nouveau job cloné
     * @memberof JobAPI
     */
    async clone(keyOfObjectToClone, newParentKey, txnId = null, jobInstance) {
        const query = { keyOfObjectToClone, newParentKey };
        if (txnId) query.txnId = txnId;
        if (jobInstance) {
            const payload = jobInstance.toJSON();
            query.jobInstance = payload;
        }
        const data = await this.client.request('/CloneObject/cloneJob', 'POST', {}, query);
        return new Job(data);
    }

    /**
     * Supprimer un job
     *
     * @param {string} key Clé primaire du job
     * @param {string} [txnId=null]
     * @return {void}
     * @memberof JobAPI
     */
    async delete(key, txnId = null) {
        const query = { type: 'Job', key };
        if (txnId) query.txnId = txnId;
        await this.client.request('/DeleteObject/DeleteObject', 'DELETE', {}, query);
    }
}