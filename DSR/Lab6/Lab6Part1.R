empid<-c(101,102,103,104,105,106,107,108,109,110)
salary<-c(20000,13100,50899,28900,23330,26789,91987,76433,50000,29200)
maritalStatus<-c('married','married','bachelor','married','bachelor','married','married','bachelor','bachelor','married')
dataframe<-data.frame(salary,maritalStatus)
dataframe
boxplot(salary~maritalStatus,data=dataframe)

