export class PaceError extends Error {
    constructor(status, statusText, data) {
        super(`${status} ${statusText}`);
        this.name = 'PaceError';
        this.status = status;
        this.data = data;
    }
}
