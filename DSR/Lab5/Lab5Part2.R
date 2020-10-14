getwd()
bk<-read.csv("Churn_Modelling.csv")
bk
income_group<-vector(mode="character", length=length(bk$EstimatedSalary))
income_group
income_group[bk$EstimatedSalary<10000]<-"Low"
income_group
income_group[bk$EstimatedSalary>=10000 & bk$EstimatedSalary < 100000]<-"middle"
income_group[bk$EstimatedSalary>100000]<-"High"
income_group
spender<-factor(income_group,levels=c("Low","middle","High"),ordered=TRUE)
spender
bk<-cbind(bk,spender)
bk
write.csv(bk,'categorize.cvs',row.names = FALSE)
