
## Using Identibyte in a Python application
##
## This example shows how you can integrate Identibyte with a Python
## application by making a simple HTTP request to the /checks endpoint
## to see if an email is disposable.

import requests

# Get the email to check and set up variables for the API

email = "email@mailinator.com"
api_key = "API_TOKEN"
api_url = "https://identibyte.com/check/" + email

# Make the API request to Identibyte

response = requests.get(api_url, auth=(api_key, ""))
disposable = response.json()['email']['disposable']

# Print the response

print("Is " + email + " disposable? " + "Yes" if disposable else "No")
