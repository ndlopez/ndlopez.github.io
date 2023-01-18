'''Read local csv file and edit date to output better format'''
import csv
path_file = "../data/sunspot_number_all.csv"

newFile = []
fields = ["date","spotNum"]

with open(path_file,mode="r",) as data_file:
    csvFile = csv.reader(data_file)
    auxArr = "";
    for lines in csvFile:
        if not lines[0] == "year":
            newArr = []
            auxArr = lines[0] + "-" + lines[1] + "-" + lines[2]
            # my_data = dict(date = auxArr,value = lines[4].strip())
            newArr.append(auxArr)
            newArr.append(lines[4].strip())
            newFile.append(newArr)

print(newFile)

outFile = "../data/sunspot_number.csv"
with open(outFile,"w",newline='') as new_file:
    write = csv.writer(new_file)
    write.writerow(fields)
    write.writerows(newFile)
