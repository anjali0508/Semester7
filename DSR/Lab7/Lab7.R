dotchart(mtcars$mpg, labels = row.names(mtcars),cex = 0.6, xlab = "mpg")


library(gcookbook)
library(ggplot2)
ggplot(cabbage_exp, aes(x=Date, y=Weight, fill=Cultivar)) +geom_bar(stat="identity", position="dodge") +geom_text(aes(label=Weight), vjust=1.5, colour="white", position=position_dodge(.9), size=3)
