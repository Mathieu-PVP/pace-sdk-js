# pace-sdk-js
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
    const jobs = await Client.jobs.findAll({ xpath: 'null-to-zero(@job) > 0' });
    const presses = await Client.presses.findAll({ xpath: 'null-to-zero(@id) > 0' });
    console.log(jobs, presses);
}());
```
