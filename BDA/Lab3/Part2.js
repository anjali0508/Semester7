use Database
db.createCollection('Customer')
db.Customer.insert({cust_id:1,Acc_bal:1500,Acc_type:"Z"})
db.Customer.insert({cust_id:2,Acc_bal:3000,Acc_type:"A"})
db.Customer.insert({cust_id:1,Acc_bal:1200,Acc_type:"A"})
db.Customer.insert({cust_id:3,Acc_bal:500,Acc_type:"Z"})
db.Customer.insert({cust_id:2,Acc_bal:1600,Acc_type:"Z"})
db.Customer.find().pretty()

db.Customer.aggregate([
    {
        $group: {
            _id: "$cust_id",
            min_bal: {$min: "$Acc_bal"},
            max_bal: {$max: "$Acc_bal"}
        }
    }
]);

db.Customer.find({Acc_bal:{$gt:1200}, Acc_type:"Z"})









