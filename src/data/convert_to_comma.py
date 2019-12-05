#USE WITH PYTHON2 ONLY. Convert csv /tab to csv comma

import csv

txt_file = "./df_example.csv"
csv_file = "./target.csv"

in_txt = csv.reader(open(txt_file, "rb"), delimiter = '\t')
out_csv = csv.writer(open(csv_file, 'wb'))

out_csv.writerows(in_txt)
