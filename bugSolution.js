```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne( { "_id": ObjectId("6519765754763457") }, { $inc: { "myField": 1 } })
```