/**
 * Classe générique pour gérer les requêtes CRUD
 */
export class AbstractAPI {
    /**
     * Crée une nouvelle instance d'AbstractAPI
     * 
     * @param {object} httpclient - Client HTTP pour faire les requêtes
     * @param {string} type - Nom du type d'objet (ex: "Company", "Customer", etc.)
     * @param {class} Model - Classe du modèle à instancier
     * @param {object} [endpoints={}] - Endpoints personnalisés
     */
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
     * Récupère tous les objets correspondant à un XPath donné
     *
     * @param {object} params
     * @param {string} params.xpath - Requête XPath pour filtrer les objets
     * @param {string|null} [params.txnId=null] - Identifiant de transaction (optionnel)
     * @returns {Promise<Model[]>} Liste des objets correspondants
     * @memberof AbstractAPI
     */
    async findAll({ xpath, txnId = null }) {
        const query = { type: this.type, xpath };
        if (txnId) query.txnId = txnId;
        const ids = await this.httpclient.request(this.endpoints.find, 'GET', null, query);
        return Promise.all(ids.map((id) => this.readById(id, txnId)));
    }

    /**
     * Récupère une portion paginée d'objets triés, via une requête XPath
     *
     * @param {object} params
     * @param {string} params.xpath - Requête XPath de filtrage
     * @param {number} params.offset - Index de départ
     * @param {number} params.limit - Nombre maximum d'objets à retourner
     * @param {string|null} [params.txnId=null] - Identifiant de transaction (optionnel)
     * @param {object[]} [params.xpathSorts=[]] - Tableau de critères de tri (XPathSort)
     * @returns {Promise<Model[]>} Liste des objets correspondants
     * @memberof AbstractAPI
     */
    async findSortAndLimit({ xpath, offset, limit, txnId = null, xpathSorts = [] }) {
        const query = { type: this.type, xpath, offset, limit };
        if (txnId) query.txnId = txnId;
        const ids = await this.httpclient.request(this.endpoints.findSortAndLimit, 'POST', xpathSorts, query);
        return Promise.all(ids.map((id) => this.readById(id, txnId)));
    }

    /**
     * Récupère un objet à partir de sa clé primaire
     *
     * @param {string} primaryKey - Clé primaire de l'objet
     * @param {string|null} [txnId=null] - Identifiant de transaction (optionnel)
     * @returns {Promise<Model>} Instance de l'objet récupéré
     * @memberof AbstractAPI
     */
    async readById(primaryKey, txnId = null) {
        const query = { primaryKey };
        if (txnId) query.txnId = txnId;
        const data = await this.httpclient.request(this.endpoints.read, 'POST', {}, query);
        return new this.Model(data);
    }

    /**
     * Met à jour un objet existant
     *
     * @param {Model} instance - Instance de l'objet avec les données mises à jour
     * @returns {Promise<Model>} Objet mis à jour
     * @memberof AbstractAPI
     */
    async update(instance) {
        const payload = instance.toJSON();
        const data = await this.httpclient.request(this.endpoints.update, 'POST', payload);
        return new this.Model(data);
    }

    /**
     * Clone un objet existant, éventuellement avec des modifications
     *
     * @param {object} params
     * @param {string} params.keyOfObjectToClone - Clé de l'objet à cloner
     * @param {string} params.newParentKey - Clé du parent de l'objet cloné
     * @param {string|null} [params.txnId=null] - Identifiant de transaction (optionnel)
     * @param {Model|null} [params.instance=null] - Nouvelle instance à cloner avec modifications (optionnel)
     * @returns {Promise<Model>} Nouvel objet cloné
     * @memberof AbstractAPI
     */
    async clone({ keyOfObjectToClone, newParentKey, txnId = null, instance = null }) {
        const query = { keyOfObjectToClone, newParentKey };
        if (txnId) query.txnId = txnId;
        if (instance) query[`${this.type.toLowerCase()}Instance`] = instance.toJSON();
        const data = await this.httpclient.request(this.endpoints.clone, 'POST', {}, query);
        return new this.Model(data);
    }

    /**
     * Supprime un objet à partir de sa clé primaire
     *
     * @param {string} key - Clé primaire de l'objet à supprimer
     * @param {string|null} [txnId=null] - Identifiant de transaction (optionnel)
     * @returns {Promise<void>}
     * @memberof AbstractAPI
     */
    async delete(key, txnId = null) {
        const query = { type: this.type, key };
        if (txnId) query.txnId = txnId;
        await this.httpclient.request(this.endpoints.delete, 'DELETE', {}, query);
    }
}
