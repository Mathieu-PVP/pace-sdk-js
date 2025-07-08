import { JobPlan } from '../models/JobPlan.js';

export class JobPlanAPI {
    constructor(client) {
        this.client = client;
    }

    /**
     * Récupérer tous les jobs planifiés
     *
     * @param {object} { xpath }
     * @return {JobPlan[]} 
     * @memberof JobPlanAPI
     */
    async findAll({ xpath }) {
        const data = await this.client.request('/FindObjects/find', 'GET', null, {
            type: 'JobPlan',
            xpath,
        });
        const jobPlanPromises = data.map((jobPlanId) => this.readById(jobPlanId));
        return Promise.all(jobPlanPromises);
    }


    /**
     * Récupérer un job planifié à partir de son ID
     *
     * @param {string|number} primaryKey la clé étrangère du job planifié
     * @param {*} [txnId=null]
     * @return {JobPlan} le job planifié concerné
     * @memberof JobPlanAPI
     */
    async readById(primaryKey, txnId = null) {
        const query = { primaryKey };
        if (txnId) query.txnId = txnId;
        const data = await this.client.request('/ReadObject/readJobPlan', 'POST', {}, query);
        return new JobPlan(data);
    }

    /**
     * Mettre à jour un job planifié
     *
     * @param {JobPlan} jobPlanInstance l'instance du job planifié
     * @return {JobPlan} le job planifié avec les données mises à jour
     * @memberof JobPlanAPI
     */
    async update(jobPlanInstance) {
        const payload = jobPlanInstance.toJSON();
        const updatedData = await this.client.request('/UpdateObject/updateJobPlan', 'POST', payload);
        return new JobPlan(updatedData);
    }

    /**
     * Cloner un job planifié
     *
     * @param {string} keyOfObjectToClone Clé primaire du job planifié à cloner
     * @param {string} newParentKey Clé primaire de la partie du travail (JobPart) à qui appartiendra le job planifié
     * @param {string} [txnId=null]
     * @param {JobPlan} jobPlanInstance l'instance du job planifié à cloner avec des modifications (facultatif)
     * @return {JobPlan} Le nouveau job planifié cloné
     * @memberof JobPlanAPI
     */
    async clone(keyOfObjectToClone, newParentKey, txnId = null, jobPlanInstance) {
        const query = { keyOfObjectToClone, newParentKey };
        if (txnId) query.txnId = txnId;
        if (jobPlanInstance) {
            const payload = jobPlanInstance.toJSON();
            query.jobPlanInstance = payload;
        }
        const data = await this.client.request('/CloneObject/cloneJobPlan', 'POST', {}, query);
        return new JobPlan(data);
    }

    /**
     * Supprimer un job planifié
     *
     * @param {string} key Clé primaire du job planifié
     * @param {string} [txnId=null]
     * @return {void}
     * @memberof JobPlanAPI
     */
    async delete(key, txnId = null) {
        const query = { type: 'JobPlan', key };
        if (txnId) query.txnId = txnId;
        await this.client.request('/DeleteObject/DeleteObject', 'DELETE', {}, query);
    }
}