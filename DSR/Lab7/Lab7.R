dotchart(mtcars$mpg, labels = row.names(mtcars),cex = 0.6, xlab = "mpg")


library(gcookbook)
library(ggplot2)
df = cabbage_exp
barplot(Weight ~ Cultivar+Date, data=df, xlab = "Date", ylab = "weight", beside=TRUE, legend = TRUE, col=c("turquoise3","turquoise1"))
