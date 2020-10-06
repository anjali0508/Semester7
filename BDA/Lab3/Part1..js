db.createCollection('Student')
db.Student.insert({ RollNo:1, Age:20, Contact:9988778899, Name:"Anjali", Email:"anjali.cs17@bmsce.ac.in"})
db.Student.insert({ RollNo:2, Age:22, Contact:9988112233, Name:"Adh", Email:"adh.cs17@bmsce.ac.in"})
db.Student.insert({ RollNo:3, Age:21, Contact:9988554455, Name:"Apek", Email:"apek.cs17@bmsce.ac.in"})

db.Student.update({RollNo:1},{$set:{Email:"aditya.cs17@bmsce.ac.in"}})
db.Student.update({RollNo:2},{$set:{Name:"Rekha"}})


db.Student.find().pretty()





