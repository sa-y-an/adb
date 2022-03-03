from rest_framework import serializers

class TodoSerializer(serializers.Serializer) :
    todo = serializers.CharField()
    _id = serializers.UUIDField()