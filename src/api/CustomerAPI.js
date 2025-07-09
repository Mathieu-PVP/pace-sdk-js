import { Customer } from '../models/Customer.js';

export class CustomerAPI {
    constructor(client) {
        this.client = client;
    }

    /**
     * Récupérer tous les clients
     *
     * @param {object} { xpath }
     * @return {Customer[]} 
     * @memberof CustomerAPI
     */
    async findAll({ xpath, txnId = null }) {
        const query = { type: 'Customer', xpath };
        if (txnId) query.txnId = txnId;
        const data = await this.client.request('/FindObjects/find', 'GET', null, query);
        const customerPromises = data.map((customerId) => this.readById(customerId));
        return Promise.all(customerPromises);
    }

    /**
     * Récupérer X à Y clients à partir d'une requête personnalisée
     *
     * @param {object} { xpath, offset, limit, txnId = null, xpathSorts = [] }
     * @return {Customer[]} 
     * @memberof CustomerAPI
     */
    async findSortAndLimit({ xpath, offset, limit, txnId = null, xpathSorts = [] }) {
        const query = { type: 'Customer', xpath, offset, limit };
        if (txnId) query.txnId = txnId;
        const data = await this.client.request('/FindObjects/findSortAndLimit', 'POST', xpathSorts, query);
        const customerPromises = data.map((customerId) => this.readById(customerId));
        return Promise.all(customerPromises);
    }

    /**
     * Récupérer un client à partir de son ID
     *
     * @param {string|number} primaryKey la clé étrangère du client
     * @param {*} [txnId=null]
     * @return {Customer} le client concerné 
     * @memberof CustomerAPI
     */
    async readById(primaryKey, txnId = null) {
        const query = { primaryKey };
        if (txnId) query.txnId = txnId;
        const data = await this.client.request('/ReadObject/readCustomer', 'POST', {}, query);
        return new Customer(data);
    }

    /**
     * Mettre à jour un client
     *
     * @param {Customer} customerInstance l'instance du client
     * @return {Customer} le client avec les données mises à jour
     * @memberof CustomerAPI
     */
    async update(customerInstance) {
        const payload = customerInstance.toJSON();
        const updatedData = await this.client.request('/UpdateObject/updateCustomer', 'POST', payload);
        return new Customer(updatedData);
    }

    /**
     * Cloner un client
     *
     * @param {string} keyOfObjectToClone Clé primaire du client à cloner
     * @param {string} newParentKey Clé primaire de la société à qui appartiendra le client
     * @param {string} [txnId=null]
     * @param {Customer} customerInstance l'instance du client à cloner avec des modifications (facultatif)
     * @return {Customer} Le nouveau client cloné
     * @memberof CustomerAPI
     */
    async clone(keyOfObjectToClone, newParentKey, txnId = null, customerInstance) {
        const query = { keyOfObjectToClone, newParentKey };
        if (txnId) query.txnId = txnId;
        if (customerInstance) {
            const payload = customerInstance.toJSON();
            query.customerInstance = payload;
        }
        const data = await this.client.request('/CloneObject/cloneCustomer', 'POST', {}, query);
        return new Customer(data);
    }

    /**
     * Supprimer un client
     *
     * @param {string} key Clé primaire du client
     * @param {string} [txnId=null]
     * @return {void}
     * @memberof CustomerAPI
     */
    async delete(key, txnId = null) {
        const query = { type: 'Customer', key };
        if (txnId) query.txnId = txnId;
        await this.client.request('/DeleteObject/DeleteObject', 'DELETE', {}, query);
    }
}