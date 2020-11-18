library(visualize)
library(BSDA)
mach1<-c(363,404,518,521,613,587,412,469,468,496)
mach2<-c(536,474,556,549,479,422,414,505,505,552)
mean(mach1)
mean(mach2)
var(mach1)
sd(mach1)
var(mach2)
sd(mach2)

t.test(x=mach1,y=mach2,var.equal = TRUE,conf.level = 0.95)

qt(p=0.05/2,df=18,lower.tail=TRUE)
qt(p=0.05/2,df=18,lower.tail=FALSE)
visualize.t(stat=c(-2.100922,2.100922),df=18,section="tails")

visualize.t(stat=c(-0.47061,0.47061),df=18,section="tails")
visualize.t(stat=c(-0.47061),df=18,section="upper")

visualize.t(stat=c(-0.47061),df=18,section="lower")

