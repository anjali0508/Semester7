use test
db.getCollection('MongoDBHandsOn').find({})
db.MongoDBHandsOn.aggregate([
    {
        $group : {
            _id : "summary",
            childrenTotal : { $sum : "$children"},
            average : {$avg : "$children"}
        }
    }
])
    