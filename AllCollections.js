show dbs
use collegeDb
db.createCollection("Student")
db.Student.insert({_id:1, Name:"Anjali",Grade:"VII",Hobbies:"Dance"})
db.Student.insert({_id:2, Name:"Ayush",Grade:"VII",Hobbies:"Play"})
db.Student.insert({_id:3, Name:"Adh",Grade:"VIII",Hobbies:"Sing"})
show dbs
show collections
db.Student.find().pretty()
db.createCollection("Faculty")
db.createCollection("COE")
db.createCollection("Library")
db.createCollection("Admission")
db.createCollection("Festival")
show collections
db.Faculty.insert({_id:1,Name:"Lala",Subject:"Science",Age:"56",Experience:5,Class:"VII"})
db.Faculty.insert({_id:2,Name:"Rekha",Subject:"Science",Age:"56",Experience:5,Class:"VII"})
db.Faculty.insert({_id:3,Name:"Sujata",Subject:"Science",Age:"56",Experience:5,Class:"VII"})
db.Faculty.insert({_id:4,Name:"Hidimba",Subject:"Science",Age:"56",Experience:5,Class:"VII"})
db.Faculty.find().pretty()
db.COE.insert({_id:1,Name:"Anjali",marks1:54,marks2:46,marks3:79,cgpa:9})
db.COE.insert({_id:2,Name:"Adh",marks1:90,marks2:46,marks3:79,cgpa:9})
db.COE.insert({_id:3,Name:"Ayush",marks1:11,marks2:46,marks3:79,cgpa:9})
db.COE.find().pretty()
db.Library.insert({_id:1,Name:"Manga",subscription:"True"})
db.Library.insert({_id:2,Name:"Manga1",subscription:"True"})
db.Library.insert({_id:3,Name:"Manga2",subscription:"True"})
db.Library.find().pretty()
db.Admission.insert({_id:1,Name:"Adh",successful:"True",Fees:"Paid",Date:"23/7"})
db.Admission.insert({_id:2,Name:"Anjali",successful:"True",Fees:"Paid",Date:"23/7"})
db.Admission.insert({_id:3,Name:"Ayush",successful:"True",Fees:"Paid",Date:"23/7"})
db.Admission.find().pretty()
db.Festival.insertMany([{_id:1,Name:"Utsav",successful:"True",Loc:"Sports Ground",Date:"23/7"}])
db.Festival.insertMany([{_id:2,Name:"Lala",successful:"True",Loc:"Sports Ground",Date:"23/7"}])
db.Festival.insertMany([{_id:3,Name:"Phaseshift",successful:"True",Loc:"Sports Ground",Date:"23/7"}])
db.Festival.find().pretty()
