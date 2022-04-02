// const { query } = require('express');
// const mysql = require('mysql');
// const dotenv = require('dotenv');

// var connection = mysql.createConnection({
//     host     : '127.0.0.1',
//     user     : 'root',
//     password : 'admin',
//     database : 'forest_friends'
//   });
  
// /* 
//   API Name :      listAll
//   API Type :      GET
//   Descrption :    Get all NFTs in the database
//   Input Payload : NA
// */
// module.exports.listAll = async(req, res) => {

//     sql_query = `SELECT NameID, Species, Sex, Cuteness, ImageURL from nft_data;`
//     console.log(`Query : ${sql_query}`);

//     connection.query(sql_query, function (error, results, fields) {
//       if (error) throw error;
//       console.log('The solution is retruned');
//       res.send(results);
//     });
// };

// /* 
//   API Name :      getOwnerNFTs
//   API Type :      GET
//   Descrption :    Get all NFTs for the specific owner address
//   Input Payload : {
//                     "owner" : "92092"
//                   }
// */
// module.exports.getOwnerNFTs = async(req, res) => {

//     requestJson = req.body;
//     owner_address = requestJson['owner'];
//     console.log(`Querying data for owner: ${owner_address}`);
    
//     sql_query = `SELECT NameID, Species, Sex, Cuteness, ImageURL from forest_friends.nft_data where Owner = '${owner_address}';`
//     console.log(`Query : ${sql_query}`);
    
//     connection.query(sql_query, function(error,results,fields) {
//       if (error) throw error;
//       console.log('The solution is retruned');
//       res.send(results);
//     });
// };

// /* 
//   API Name :      createOwnerNFT
//   API Type :      POST
//   Descrption :    Update the owner address of the NFT in the database
//   Input Payload : {
//                     "owner": "92092",
//                     "nft_id": "KEVIN"
//                   }
// */
// module.exports.createOwnerNFT = async(req, res) => {
  
//   requestJson = req.body;
//   owner_address = requestJson['owner'];
//   nft_id = requestJson['nft_id'];
//   console.log(`Querying data for: ${owner_address}`);

//   sql_query = `update forest_friends.nft_data set Owner = '${owner_address}' where NameID ='${nft_id}' LIMIT 1;`;
//   console.log(`Query: ${sql_query}`);

//   connection.query(sql_query, function(error,results,fields) {
//     if (error) throw error;
//     console.log('The solution is retruned');
//     res.send(results);
//   });
// };


// /* 
//   API Name :      getResearcherNFTs
//   API Type :      GET
//   Descrption :    Get all NFTs for a specific speicie researcher
//   Input Payload : {
//                     "owner" : "91934"
//                   }
// */
// module.exports.getResearcherNFTs = async(req, res) => {
  
//   requestJson = req.body;
//   owner_address = requestJson['owner'];
//   console.log(`Querying data for: ${owner_address}`);

//   sql_query_user = `select owner_type, research_type from forest_friends.user_profiles where owner = '${owner_address}' LIMIT 1;`
//   console.log(sql_query_user);

//   connection.query(sql_query_user, function(error,results,fields) {
//     if (error) throw error;
//     console.log('The solution is retruned');
//     owner_type = results[0]['owner_type'];
//     research_type = results[0]['research_type'];
//     console.log(`Owner Type: ${owner_type}`);
//     console.log(`Owner Type: ${research_type}`);
//     if (owner_type == "Researcher") {
//       sql_query_researcher = `select * from forest_friends.nft_data where Species = '${research_type}';`;
//       console.log(sql_query_researcher);
//       connection.query(sql_query_researcher, function(error,results2,fields) {
//         if (error) throw error;
//         res.send(results2);
//       });
//     }
//     else {
//       console.log("Not a Researcher, returning null");
//       res.send(null);
//     }
    
//   });

  
// };

// /* 
//   API Name : NA
//   Descrption : Template
//   Input Payload : NA
// */
// module.exports.template = async(req, res) => {

// };