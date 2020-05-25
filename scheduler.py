import json

#pipenv install requests
import requests

# python -m pip install pymongo
import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["swapi"]
mycol = mydb["peoples"]
mycol2 = mydb["planet"]

#Este endpoint se guarda en la mongo db y se lleva al front
total_results = []
response = requests.get("https://swapi.dev/api/people/")
data = response.json()
total_results = total_results + data['results']
while data['next'] is not None:
    response = requests.get(data['next'])
    data = response.json()
    total_results = total_results + data['results']
x = mycol.insert_many(total_results) 

 
# Este endpoint se guarda en la mongo db pero no se lleva al front
total_results2 = []
response2 = requests.get("https://swapi.dev/api/planets/")
data2 = response2.json()
total_results2 = total_results2 + data2['results']
while data2['next'] is not None:
    response2 = requests.get(data2['next'])
    data2 = response2.json()
    total_results2 = total_results2 + data2['results']
y = mycol2.insert_many(total_results2)


myclient.close()