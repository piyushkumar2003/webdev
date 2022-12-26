// Searching for data in mongo db
// use harryKart

// This query will return all the objects with rating equal to 3.5
db.items.find({rating: 3.5})
db.items.find({rating: {$gte: 3.5}})//greater than equal to
db.items.find({rating: {$gt: 3.5}})//greater than
db.items.find({rating: {$lte: 3.5}}) //less than equal to
db.items.find({rating: {$lt: 3.5}}) //less than


// And operator
db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000}})

db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})


// or operator
db.items.find({ 
    $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}] 
})


// projection query:--> this will return only ratings above 3.5
db.items.find({rating: {$gt: 3.5}}, {rating: 1})


// projection query:--> this will return ratings above 3.5 and their quantity
db.items.find({rating: {$gt: 3.5}}, {rating: 1,qty : 1})
