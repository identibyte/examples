# PHP and Identibyte example

This directory contains an example of how to use Identibyte with a PHP
application to detect disposable email addresses. This code uses PHP's
`file_get_contents` to make the API request and has no external
dependencies.

#### Running this example
You can run this PHP example from the command line:

```
$ php -f identibyte.php
```

And optionally specify an email address to check:

```
$ php -f identibyte.php myemail@gmail.com
```

#### How it works
The code here is pretty straightfoward. Here's what happens when it
runs:

- Get the email address to check
- Build the API request using PHP's `file_get_contents`
- Make API request to Identibyte
- Print if the email address is disposable.

---

> [Identibyte](https://identibyte.com) &nbsp;&middot;&nbsp;
> GitHub [@Identibyte](https://github.com/identibyte) &nbsp;&middot;&nbsp;
> Twitter [@Identibyte](https://twitter.com/identibyte)
