# Pace SDK Javascript
Le kit de développement logiciel pour Pace

## Installation
```
npm i Mathieu-PVP/pace-sdk-js
```

## Utilisation
```js
import { PaceClient, version } from 'pace-sdk-js';

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

## Crédits
Mathieu GALLAIS de CHATEAUCROC
