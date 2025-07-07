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
}