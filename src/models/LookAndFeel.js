export class LookAndFeel {
    constructor(data = {}) {
        Object.assign(this, data);
    }

    toJSON() {
        const clone = { ...this };
        delete clone._internalState;
        return clone;
    }
}
