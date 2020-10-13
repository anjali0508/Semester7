use test
db.createCollection("Country")
db.Country.insert({_id:1,Cities:["Bangalore","Pune"]})
db.Country.insert({_id:2,Cities:["Hyderabad","Mumbai","Delhi"]})
db.Country.insert({_id:3,Cities:["Ooty","Jamshedpur","Jodhpur"]})
db.Country.find()

db.Country.find().limit(1)
db.Country.find().skip(2).limit(2)

db.Country.update({_id:1},{$push:{population:{Bangalore:30,Chennai:45}}})
db.Country.find()

db.Country.update({_id:3},{$pop:{Cities:1}})
db.Country.find()

db.Country.update({Cities:"Hyderabad"},{$pull:{Cities:'Hyderabad'}})
db.Country.find()

db.Country.update({_id:1},{$set:{'Cities.2':'Srinagar'}})
db.Country.update({_id:2},{$addToSet:{Cities:"Trichi"}})
db.Country.find()