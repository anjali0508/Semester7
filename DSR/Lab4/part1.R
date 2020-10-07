list.files()
getwd()
grep(".csv",list.files())
bank_data<-read.csv("bank-data.csv")
bank_data


head(bank_data)
dim(bank_data)
ncol(bank_data)
nrow(bank_data)
str(bank_data)
colnames(bank_data)

summary(bank_data)
age=bank_data[,"age"]
income=bank_data[,"income"]
plot(age,income)
