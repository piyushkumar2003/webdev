// Inserting data in mongo db

// show dbs --->  to view all dbs 
// show collections --->  to view all collections -->aka sheet in excel


// to make a new db
// use harryKart
 
// items --> collection --> aka sheet in excel

// db.items.insertOne({name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98})

// db.items.insertMany([{name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98}, {name: "Moto 30s", price: 29000, rating: 3.5, qty: 133, sold: 598}, {name: "Realme 80s", price: 129000, rating: 2.5, qty: 633, sold: 98, isBig: true}])

// db.items.find() --> to view all the documents(enteries) in item db