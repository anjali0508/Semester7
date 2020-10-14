#3a.Create  a matrix object from the data  that is given 
#in the above question 
#2. Make a List using the plant names from above as an object 
#to include in the list along with the original data.
#3.b)Create a List of data objects of type Numeric , String, 
#Real Numbers and name them.


#3a
buff<-c(10,1,37,5,12)
garden<-c(8,3,9,6,4)
red<-c(18,9,12,4,5)
carder<-c(8,27,6,32,23)
honey<-c(12,13,16,9,10)
df<-data.frame(buff,garden,red,carder,honey)
matrix <- data.matrix(df)
matrix
names <- list("Thistle","Vipers","Golden","Rain","Yell")
rownames(matrix) <- names
matrix

#3b
integers=c(10,20,30)
strings=c("abc","def","xyz")
real_numbers=c(-23.55,14.2,77.0)

list1=list(integers,strings,real_numbers)
names(list1)=c("Integers","Strings","Real numbers")
list1

