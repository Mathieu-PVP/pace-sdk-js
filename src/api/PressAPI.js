import { Press } from '../models/Press.js';

export class PressAPI {
    constructor(client) {
        this.client = client;
    }

    /**
     * Récupérer toutes les presses
     *
     * @param {object} { xpath }
     * @return {Press[]} 
     * @memberof PressAPI
     */
    async findAll({ xpath }) {
        const data = await this.client.request('/FindObjects/find', 'GET', null, {
            type: 'Press',
            xpath,
        });
        const pressPromises = data.map((pressId) => this.readById(pressId));
        return Promise.all(pressPromises);
    }

    /**
     * Récupérer X à Y presses à partir d'une requête personnalisée
     *
     * @param {object} { xpath, offset, limit, txnId = null, xpathSorts = [] }
     * @return {Press[]} 
     * @memberof PressAPI
     */
    async findSortAndLimit({ xpath, offset, limit, txnId = null, xpathSorts = [] }) {
        const query = { type: 'Press', xpath, offset, limit };
        if (txnId) query.txnId = txnId;
        const data = await this.client.request('/FindObjects/findSortAndLimit', 'POST', xpathSorts, query);
        const pressPromises = data.map((pressId) => this.readById(pressId));
        return Promise.all(pressPromises);
    }

    /**
     * Récupérer une presse à partir de son ID
     *
     * @param {string|number} primaryKey la clé étrangère de la presse
     * @param {*} [txnId=null]
     * @return {Press} la presse concernée 
     * @memberof PressAPI
     */
    async readById(primaryKey, txnId = null) {
        const query = { primaryKey };
        if (txnId) query.txnId = txnId;
        const data = await this.client.request('/ReadObject/readPress', 'POST', {}, query);
        return new Press(data);
    }

    /**
     * Mettre à jour une presse
     *
     * @param {Press} pressInstance l'instance de la presse
     * @return {Press} la presse avec les données mises à jour
     * @memberof PressAPI
     */
    async update(pressInstance) {
        const payload = pressInstance.toJSON();
        const updatedData = await this.client.request('/UpdateObject/updatePress', 'POST', payload);
        return new Press(updatedData);
    }

    /**
     * Cloner une presse
     *
     * @param {string} keyOfObjectToClone Clé primaire de la presse à cloner
     * @param {string} newParentKey Clé primaire de la société à qui appartiendra la presse
     * @param {string} [txnId=null]
     * @param {Press} pressInstance l'instance de la presse à cloner avec des modifications (facultatif)
     * @return {Press} La nouvelle presse clonée
     * @memberof PressAPI
     */
    async clone(keyOfObjectToClone, newParentKey, txnId = null, pressInstance) {
        const query = { keyOfObjectToClone, newParentKey };
        if (txnId) query.txnId = txnId;
        if (pressInstance) {
            const payload = pressInstance.toJSON();
            query.pressInstance = payload;
        }
        const data = await this.client.request('/CloneObject/clonePress', 'POST', {}, query);
        return new Press(data);
    }

    /**
     * Supprimer une presse
     *
     * @param {string} key Clé primaire de la presse
     * @param {string} [txnId=null]
     * @return {void}
     * @memberof PressAPI
     */
    async delete(key, txnId = null) {
        const query = { type: 'Press', key };
        if (txnId) query.txnId = txnId;
        await this.client.request('/DeleteObject/DeleteObject', 'DELETE', {}, query);
    }
}