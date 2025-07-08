import { Estimate } from '../models/Estimate.js';

export class EstimateAPI {
    constructor(client) {
        this.client = client;
    }

    /**
     * Récupérer tous les devis
     *
     * @param {object} { xpath }
     * @return {Estimate[]} 
     * @memberof EstimateAPI
     */
    async findAll({ xpath }) {
        const data = await this.client.request('/FindObjects/find', 'GET', null, {
            type: 'Estimate',
            xpath,
        });
        const estimatePromises = data.map((estimateId) => this.readById(estimateId));
        return Promise.all(estimatePromises);
    }

    /**
     * Récupérer un devis à partir de son ID
     *
     * @param {string|number} primaryKey la clé étrangère du devis
     * @param {*} [txnId=null]
     * @return {Estimate} le devis concerné 
     * @memberof EstimateAPI
     */
    async readById(primaryKey, txnId = null) {
        const query = { primaryKey };
        if (txnId) query.txnId = txnId;
        const data = await this.client.request('/ReadObject/readEstimate', 'POST', {}, query);
        return new Estimate(data);
    }

    /**
     * Mettre à jour un devis
     *
     * @param {Estimate} estimateInstance l'instance du devis
     * @return {Estimate} le devis avec les données mises à jour
     * @memberof EstimateAPI
     */
    async update(estimateInstance) {
        const payload = estimateInstance.toJSON();
        const updatedData = await this.client.request('/UpdateObject/updateEstimate', 'POST', payload);
        return new Estimate(updatedData);
    }

    /**
     * Cloner un devis
     *
     * @param {string} keyOfObjectToClone Clé primaire du devis à cloner
     * @param {string} newParentKey Clé primaire de la société à qui appartiendra le devis
     * @param {string} [txnId=null]
     * @param {Estimate} estimateInstance l'instance du devis à cloner avec des modifications (facultatif)
     * @return {Estimate} Le nouveau devis cloné
     * @memberof EstimateAPI
     */
    async clone(keyOfObjectToClone, newParentKey, txnId = null, estimateInstance) {
        const query = { keyOfObjectToClone, newParentKey };
        if (txnId) query.txnId = txnId;
        if (estimateInstance) {
            const payload = estimateInstance.toJSON();
            query.estimateInstance = payload;
        }
        const data = await this.client.request('/CloneObject/cloneEstimate', 'POST', {}, query);
        return new Estimate(data);
    }

    /**
     * Supprimer un devis
     *
     * @param {string} key Clé primaire du devis
     * @param {string} [txnId=null]
     * @return {void}
     * @memberof EstimateAPI
     */
    async delete(key, txnId = null) {
        const query = { type: 'Estimate', key };
        if (txnId) query.txnId = txnId;
        await this.client.request('/DeleteObject/DeleteObject', 'DELETE', {}, query);
    }
}