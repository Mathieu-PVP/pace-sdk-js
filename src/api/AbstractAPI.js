export class AbstractAPI {
    constructor(httpclient, type, Model, endpoints) {
        this.httpclient = httpclient;
        this.type = type;
        this.Model = Model;
        this.endpoints = {
            find: '/FindObjects/find',
            findSortAndLimit: '/FindObjects/findSortAndLimit',
            read: `/ReadObject/read${type}`,
            update: `/UpdateObject/update${type}`,
            clone: `/CloneObject/clone${type}`,
            delete: '/DeleteObject/DeleteObject',
            ...endpoints
        };
    }

    /**
     * Récupérer tous les objets
     *
     * @param {object} { xpath }
     * @return {Model[]} 
     * @memberof AbstractAPI
     */
    async findAll({ xpath, txnId = null }) {
        const query = { type: this.type, xpath };
        if (txnId) query.txnId = txnId;
        const ids = await this.httpclient.request(this.endpoints.find, 'GET', null, query);
        return Promise.all(ids.map((id) => this.readById(id, txnId)));
    }

    /**
     * Récupérer X à Y objets à partir d'une requête personnalisée
     *
     * @param {object} { xpath, offset, limit, txnId = null, xpathSorts = [] }
     * @return {Abstract[]} 
     * @memberof AbstractAPI
     */
    async findSortAndLimit({ xpath, offset, limit, txnId = null, xpathSorts = [] }) {
        const query = { type: this.type, xpath, offset, limit };
        if (txnId) query.txnId = txnId;
        const ids = await this.httpclient.request(this.endpoints.findSortAndLimit, 'POST', xpathSorts, query);
        return Promise.all(ids.map((id) => this.readById(id, txnId)));
    }

    /**
     * Récupérer un objet à partir de son ID
     *
     * @param {string|number} primaryKey la clé étrangère de l'objet
     * @param {*} [txnId=null]
     * @return {Abstract} l'objet concerné
     * @memberof AbstractAPI
     */
    async readById(primaryKey, txnId = null) {
        const query = { primaryKey };
        if (txnId) query.txnId = txnId;
        const data = await this.httpclient.request(this.endpoints.read, 'POST', {}, query);
        return new this.Model(data);
    }

    /**
     * Mettre à jour un objet
     *
     * @param {Abstract} jobInstance l'instance de l'objet
     * @return {Abstract} l'objet avec les données mises à jour
     * @memberof AbstractAPI
     */
    async update(instance) {
        const payload = instance.toJSON();
        const data = await this.httpclient.request(this.endpoints.update, 'POST', payload);
        return new this.Model(data);
    }

    /**
     * Cloner un objet
     *
     * @param {string} keyOfObjectToClone Clé primaire de l'objet à cloner
     * @param {string} newParentKey Clé primaire de l'objet parente à qui appartiendra cette objet
     * @param {string} [txnId=null]
     * @param {Abstract} instance l'instance de l'objet à cloner avec des modifications (facultatif)
     * @return {Abstract} La nouvelle objet cloné
     * @memberof AbstractAPI
     */
    async clone(keyOfObjectToClone, newParentKey, txnId = null, instance = null) {
        const query = { keyOfObjectToClone, newParentKey };
        if (txnId) query.txnId = txnId;
        if (instance) query[`${this.type.toLowerCase()}Instance`] = instance.toJSON();
        const data = await this.httpclient.request(this.endpoints.clone, 'POST', {}, query);
        return new this.Model(data);
    }

    /**
     * Supprimer un objet
     *
     * @param {string} key Clé primaire de l'objet
     * @param {string} [txnId=null]
     * @return {void}
     * @memberof AbstractAPI
     */
    async delete(key, txnId = null) {
        const query = { type: this.type, key };
        if (txnId) query.txnId = txnId;
        await this.httpclient.request(this.endpoints.delete, 'DELETE', {}, query);
    }
}
