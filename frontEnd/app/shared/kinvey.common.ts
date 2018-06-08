import { Kinvey } from 'kinvey-nativescript-sdk';

Kinvey.init({
    apiHostname: 'https://console.kinvey.com/app/2b7bff39c3ae49a8bde8dd5352355a9f',
    appKey: 'kid_SJek5u8eQ',
    appSecret: 'e1164e0a8abc4af99505b53e0a6dcc40'
});

Kinvey.ping()
    .then((response) => {
        console.log(`Kinvey Ping Success. Kinvey Service is alive, version: ${response.version}, response: ${response.kinvey}`);
    })
    .catch((error) => {
        console.log(`Kinvey Ping Failed. Response: ${error.description}`, error);
    });