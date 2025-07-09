import { Company } from '../models/Company.js';

export class CompanyAPI {
    constructor(client) {
        this.client = client;
    }

    /**
     * Récupérer toutes les sociétés
     *
     * @param {object} { xpath }
     * @return {Company[]} 
     * @memberof CompanyAPI
     */
    async findAll({ xpath }) {
        const data = await this.client.request('/FindObjects/find', 'GET', null, {
            type: 'Company',
            xpath,
        });
        const companyPromises = data.map((companyId) => this.readById(companyId));
        return Promise.all(companyPromises);
    }

    /**
     * Récupérer X à Y sociétés à partir d'une requête personnalisée
     *
     * @param {object} { xpath, offset, limit, txnId = null, xpathSorts = [] }
     * @return {Company[]} 
     * @memberof CompanyAPI
     */
    async findSortAndLimit({ xpath, offset, limit, txnId = null, xpathSorts = [] }) {
        const query = { type: 'Company', xpath, offset, limit };
        if (txnId) query.txnId = txnId;
        const data = await this.client.request('/FindObjects/findSortAndLimit', 'POST', xpathSorts, query);
        const companyPromises = data.map((companyId) => this.readById(companyId));
        return Promise.all(companyPromises);
    }

    /**
     * Récupérer une société à partir de son ID
     *
     * @param {string|number} primaryKey la clé étrangère de la société
     * @param {*} [txnId=null]
     * @return {Company} la société concernée
     * @memberof CompanyAPI
     */
    async readById(primaryKey, txnId = null) {
        const query = { primaryKey };
        if (txnId) query.txnId = txnId;
        const data = await this.client.request('/ReadObject/readCompany', 'POST', {}, query);
        return new Company(data);
    }

    /**
     * Mettre à jour une société
     *
     * @param {Company} jobInstance l'instance de la société
     * @return {Company} la société avec les données mises à jour
     * @memberof CompanyAPI
     */
    async update(jobInstance) {
        const payload = jobInstance.toJSON();
        const updatedData = await this.client.request('/UpdateObject/updateCompany', 'POST', payload);
        return new Company(updatedData);
    }

    /**
     * Cloner une société
     *
     * @param {string} keyOfObjectToClone Clé primaire de la société à cloner
     * @param {string} newParentKey Clé primaire de la société à qui appartiendra la société
     * @param {string} [txnId=null]
     * @param {Company} companyInstance l'instance de la société à cloner avec des modifications (facultatif)
     * @return {Company} La nouvelle société clonée
     * @memberof CompanyAPI
     */
    async clone(keyOfObjectToClone, newParentKey, txnId = null, companyInstance) {
        const query = { keyOfObjectToClone, newParentKey };
        if (txnId) query.txnId = txnId;
        if (companyInstance) {
            const payload = companyInstance.toJSON();
            query.companyInstance = payload;
        }
        const data = await this.client.request('/CloneObject/cloneCompany', 'POST', {}, query);
        return new Company(data);
    }

    /**
     * Supprimer une société
     *
     * @param {string} key Clé primaire de la société
     * @param {string} [txnId=null]
     * @return {void}
     * @memberof CompanyAPI
     */
    async delete(key, txnId = null) {
        const query = { type: 'Company', key };
        if (txnId) query.txnId = txnId;
        await this.client.request('/DeleteObject/DeleteObject', 'DELETE', {}, query);
    }
}