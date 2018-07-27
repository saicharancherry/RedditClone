from django.http import response
from django.apps import AppConfig

class CorsMiddleware(AppConfig):
    def process_response(self, req, resp):
        response["Access-Control-Allow-Origin"] = "*"
        return response