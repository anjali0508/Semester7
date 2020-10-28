install.packages("ggplot")
library(ggplot2)
set.seed(100)
x<-rnorm(100,mean=0,sd=1)
x
y<-rnorm(100,mean=0,sd=1)
boxplot(x)
dat<-as.data.frame(cbind(x,y))
dat
ggplot()+geom_point(data=dat, aes(x=x,y=y),size=3, color="blue")+ ggtitle("Scatterplot")+labs(y= "y-axis", x = "x-axis")
