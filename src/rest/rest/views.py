from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json, logging, os
from pymongo import MongoClient
from .serializers import TodoSerializer


mongo_uri = 'mongodb://' + os.environ["MONGO_HOST"] + ':' + os.environ["MONGO_PORT"]
db = MongoClient(mongo_uri)['test_db']
collection  = db["test_db"]


def isValid(data) :
    if (list(data.keys()) != ["todo"]) :
        return False
    return True

class TodoListView(APIView):

    def get(self, request):
        # Implement this method - return all todo items from db instance above.
        todoItems = []
        data = collection.find({})
        for item in data :
            todoItems.append(item)
        serializedItems = TodoSerializer(todoItems, many=True)
        return Response(serializedItems.data, status=status.HTTP_200_OK)
        
    def post(self, request):
        # Implement this method - accept a todo item in a mongo collection, persist it using db instance above.
        data = request.data
        if( isValid(data) == False) :
            return Response({"invalid form data"}, status= status.HTTP_400_BAD_REQUEST)
        result = collection.insert_one(data)
        if (result.acknowledged) : 
            return Response({"sucess"}, status=status.HTTP_200_OK)
        else :
            return Response({"failed"}, status=status.HTTP_424_FAILED_DEPENDENCY)

