#==================== 1 ======================== 

# x = [ [5,2,3], [10,8,9] ] 
# students = [
#     {'first_name':  'Michael', 'last_name' : 'Jordan'},
#     {'first_name' : 'John', 'last_name' : 'Rosales'}
# ]
# sports_directory = {
#     'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
#     'soccer' : ['Messi', 'Ronaldo', 'Rooney']
# }
# z = [ {'x': 10, 'y': 20} ]

# # Update Values
# x[1][0] = 15
# print(x)

# # Change last name
# students[0]['last_name'] = "Bryant"
# print(students)

# # Messi to Andres
# sports_directory['soccer'][0] = "Andres"
# print(sports_directory)

# # z 20 to 30
# z[0]['y'] = 30
# print(z)

# ==================== 2 =======================

# students = [
#     {'first_name':  'Michael', 'last_name' : 'Jordan'},
#     {'first_name' : 'John', 'last_name' : 'Rosales'},
#     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#     {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]
# def iterateDictionary(some_list):
#     for x in range(0, len(some_list)):
#         temp = ""
#         for key, val in some_list[x].items():
#             temp += (f"{key} - {val} ")
#         print(temp)

# iterateDictionary(students)

# =================== 3 =======================

# students = [
#     {'first_name':  'Michael', 'last_name' : 'Jordan'},
#     {'first_name' : 'John', 'last_name' : 'Rosales'},
#     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#     {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]

# def iterateDictionary2(key_name, some_list):
#     for x in students:
#         print(x[key_name])

# iterateDictionary2("first_name", students)

# iterateDictionary2("last_name", students)

# ==================== 4 ======================

# dojo = {
#     'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
#     'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
# }

# def printInfo(dict):
#     for key, val in dict.items():
#         print(len(val), f"{key}")
#         for x in range(0, len(val)):
#             print(val[x])
#         print("------")

# printInfo(dojo)