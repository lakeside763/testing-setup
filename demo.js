const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';

const main = async () => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    // await listDatabases(client)
    await createOrders(client)
  } catch (e) {
    console.error(e)
  } finally {
    await client.close();
  }
}

main().catch(console.error);



const createOrders = async (client) => {
  const orders = await client.db("monoSample").collection("orders").insertMany([
    { "_id" : 1, "item" : "almonds", "price" : 12, "quantity" : 2 },
    { "_id" : 2, "item" : "pecans", "price" : 20, "quantity" : 1 },
    { "_id" : 3  }
 ])
  console.log(orders);
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databses:")
  databasesList.databases.forEach(db => {
    console.log(`-${db.name}`)
  });
}
  

// module.exports = {
//   main,
//   db,
//   client,
// }




