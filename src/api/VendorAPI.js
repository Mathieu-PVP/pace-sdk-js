import { Vendor } from '../models/Vendor.js';

export class VendorAPI {
    constructor(client) {
        this.client = client;
    }

    /**
     * Récupérer tous les fournisseurs
     *
     * @param {object} { xpath }
     * @return {Vendor[]} 
     * @memberof VendorAPI
     */
    async findAll({ xpath, txnId = null }) {
        const query = { type: 'Vendor', xpath };
        if (txnId) query.txnId = txnId;
        const data = await this.client.request('/FindObjects/find', 'GET', null, query);
        const vendorPromises = data.map((vendorId) => this.readById(vendorId));
        return Promise.all(vendorPromises);
    }

    /**
     * Récupérer X à Y fournisseurs à partir d'une requête personnalisée
     *
     * @param {object} { xpath, offset, limit, txnId = null, xpathSorts = [] }
     * @return {Vendor[]} 
     * @memberof VendorAPI
     */
    async findSortAndLimit({ xpath, offset, limit, txnId = null, xpathSorts = [] }) {
        const query = { type: 'Vendor', xpath, offset, limit };
        if (txnId) query.txnId = txnId;
        const data = await this.client.request('/FindObjects/findSortAndLimit', 'POST', xpathSorts, query);
        const vendorPromises = data.map((vendorId) => this.readById(vendorId));
        return Promise.all(vendorPromises);
    }

    /**
     * Récupérer un fournisseur à partir de son ID
     *
     * @param {string|number} primaryKey la clé étrangère du fournisseur
     * @param {*} [txnId=null]
     * @return {Vendor} le fournisseur concerné 
     * @memberof VendorAPI
     */
    async readById(primaryKey, txnId = null) {
        const query = { primaryKey };
        if (txnId) query.txnId = txnId;
        const data = await this.client.request('/ReadObject/readVendor', 'POST', {}, query);
        return new Vendor(data);
    }

    /**
     * Mettre à jour un fournisseur
     *
     * @param {Vendor} vendorInstance l'instance du fournisseur
     * @return {Vendor} le fournisseur avec les données mises à jour
     * @memberof VendorAPI
     */
    async update(vendorInstance) {
        const payload = vendorInstance.toJSON();
        const updatedData = await this.client.request('/UpdateObject/updateVendor', 'POST', payload);
        return new Vendor(updatedData);
    }

    /**
     * Cloner un fournisseur
     *
     * @param {string} keyOfObjectToClone Clé primaire du fournisseur à cloner
     * @param {string} newParentKey Clé primaire de la société à qui appartiendra le fournisseur
     * @param {string} [txnId=null]
     * @param {Vendor} vendorInstance l'instance du fournisseur à cloner avec des modifications (facultatif)
     * @return {Vendor} Le nouveau fournisseur cloné
     * @memberof VendorAPI
     */
    async clone(keyOfObjectToClone, newParentKey, txnId = null, vendorInstance) {
        const query = { keyOfObjectToClone, newParentKey };
        if (txnId) query.txnId = txnId;
        if (vendorInstance) {
            const payload = vendorInstance.toJSON();
            query.vendorInstance = payload;
        }
        const data = await this.client.request('/CloneObject/cloneVendor', 'POST', {}, query);
        return new Vendor(data);
    }

    /**
     * Supprimer un fournisseur
     *
     * @param {string} key Clé primaire du fournisseur
     * @param {string} [txnId=null]
     * @return {void}
     * @memberof VendorAPI
     */
    async delete(key, txnId = null) {
        const query = { type: 'Vendor', key };
        if (txnId) query.txnId = txnId;
        await this.client.request('/DeleteObject/DeleteObject', 'DELETE', {}, query);
    }
}