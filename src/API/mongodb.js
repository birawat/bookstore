const MongoClient =require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'
const client = new  MongoClient(url);
const database = "BooksMania"

async function dbConnection(){
    let result = await client.connect();
   let db = result.db(database)
   return db.collection('books')
    // let response = await collection.find().toArray();

}
module.exports = dbConnection;