/**
 * Fonction permettant de concatener les paramètres ensembles
 *
 * @export
 * @param {object} [params={}] l'objet contenant tous les paramètres
 * @return {string} 
 */
export function buildQuery(params = {}) {
    return Object.entries(params)
        .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
        .join('&');
}