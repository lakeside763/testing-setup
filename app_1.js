const { main, db, client } = require("./demo");

main()
  .then(console.log('connected'))
  .catch(console.error)
  .finally(() => client.close());

// db.orders.insertMany(
//   [
//     { "_id" : 1, "item" : "almonds", "price" : 12, "quantity" : 2 },
//     { "_id" : 2, "item" : "pecans", "price" : 20, "quantity" : 1 },
//     { "_id" : 3  }
//  ]
// )


console.log(createOrders());