
## Using Identibyte in a Ruby application
##
## This example shows how you can integrate Identibyte with a Ruby
## application by making a simple HTTP request to the /checks endpoint
## to see if an email is disposable.

require 'net/http'
require 'uri'
require 'json'


## Define the API endpoint and settings

email = "email@mailinator.com"
uri = URI.parse("https://identibyte.com/check/#{email}")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

## Set a Basic Authorization header

request = Net::HTTP::Get.new(uri.request_uri)
request.basic_auth("API_TOKEN", "")

## Make the request and check if the email is disposable

response = JSON.parse(http.request(request).body)
disposable = response['email']['disposable'] == true ? 'Yes' : 'No'

# Print the result

puts "Is #{email} disposable? #{disposable}."
