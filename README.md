# Pace SDK Javascript
Le kit de développement logiciel pour Pace

# Utilisation

```js
import { PaceClient, version } from './src/index.js';

const Client = new PaceClient({
    username: '<username>',
    password: '<password>',
    baseUrl: 'https://<domain>/rpc/rest/services'
});

console.log(`PaceSDK - v${version}`);

(async function () {
    const estimates = await Client.estimate.findAll({ xpath: 'null-to-zero(@id) > 0' });
    console.log(estimates);
}());
```
