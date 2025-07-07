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
}