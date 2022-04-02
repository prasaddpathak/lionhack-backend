// const mysql = require('mysql')
// const { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');
// const rtt = require("./../runtime_types.json");

// const public_node_url = 'wss://testnet2.uniquenetwork.io';

// const wsProvider = new WsProvider(public_node_url);

// // #stringToBufferUTF16 = (str) => {
// //     let buf = [];
// //     for (let i=0, strLen=str.length; i < strLen; i++) {
// //       buf.push(str.charCodeAt(i));
// //     }
// //     return buf;
// // }

// // Configuration for collection
// const configCollection = {
//     name: 'forest-friends',
//     description: 'Forest Friends NFTs are curated from the best network of wildlife programs working to restore endangered species across the world.',
//     tokenPrefix: 'ff',
//     collectionType: 1
// };

// module.exports.createUniqueCollection =  async(req, res) => {
    
//     // Create the API and wait until ready
//     const api = await ApiPromise.create({
//         provider: wsProvider,
//         types: rtt
//     });
    
//     // create collection
//     const exec = await api.tx.nft.createCollection(configCollection['name'], configCollection['description'], configCollection['tokenPrefix'],configCollection['collectionType']);
//     console.log(exec);
//     const collectionId = exec.getCollectionId();
//     console.log(collectionId);
//     res.send(exec);
// };


