
/**
 * Using Identibyte in a Node.js application
 *
 * This example shows how you can integrate Identibyte with a Node.js
 * application by making a simple HTTP request to the /checks endpoint
 * to see if an email is disposable.
 */

const https = require('https')

// Get the email to check and set up options for the API request

const email = 'email@mailinator.com'

const reqOptions = {
    host: 'identibyte.com',
    path: '/check/' + email,
    auth: 'API_TOKEN:',
}

// Make the API request and wait for the response

https.get(options, (res) => {
    let body = ''
    res.on('data', chunk => body += chunk)

    // Print if the email address is disposable or not

    res.on('end', () => {
        const response = JSON.parse(body)
        const disposable = response.email.disposable === true ? 'Yes' : 'No'

        console.log(`Is ${email} disposable? ${disposable}`)
    })
})
