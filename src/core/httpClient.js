import fetch from 'node-fetch';
import { PaceError } from './PaceError.js';
import { buildQuery } from '../utils/buildQuery.js';

export class HttpClient {
    constructor({ baseUrl, username, password }) {
        this.baseUrl = baseUrl;
        this.authHeader = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
    }

    /**
     * Fonction principale permettant la communication avec l'API
     *
     * @param {string} path le chemin où effectuer la requête 
     * @param {string} [method='GET'] la méthode de la requête (CRUD)
     * @param {object} [body=null] le corps à envoyer à l'API (facultatif)
     * @param {object} [query={}] les paramètres de l'API à envoyer
     * @return {*} 
     * @memberof HttpClient
     */
    async request(path, method = 'GET', body = null, query = {}) {
        const queryString = buildQuery(query);
        const url = new URL(`${this.baseUrl}${path}${queryString ? '?' + queryString : ''}`);

        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.authHeader,
            },
        };
        
        if (body && ['POST', 'PUT'].includes(method)) {
            options.body = JSON.stringify(body);
        }

        try {
            const response = await fetch(url, options);
            const responseData = await response.json();

            if (!response.ok) {
                throw new PaceError(response.status, response.statusText, responseData);
            }

            return responseData;
        } catch (err) {
            if (err instanceof PaceError) throw err;
            throw new PaceError(500, 'Client Error', { message: err.message });
        }
    }
}