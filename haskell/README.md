# Haskell and Identibyte example

This directory contains an example of how to integrate Identibyte with
your Haskell application. The sample code here uses the Haskell `wreq`
library to make an API call Identibyte and check if a given email
address is disposable.

**Here's the series of events**
- Get the email address to check
- Build the API request using Haskell's `wreq` library
- Make request to Identibyte to see if the email is a DEA
- Print the result.

### Run

You can run `Main.hs` using [stack](https://github.com/commercialhaskell/stack):

```sh
stack script Main.hs --resolver lts-9.13 --package wreq --package aeson --package lens --package lens-aeson
```

---

> [Identibyte](https://identibyte.com) &nbsp;&middot;&nbsp;
> GitHub [@Identibyte](https://github.com/identibyte) &nbsp;&middot;&nbsp;
> Twitter [@Identibyte](https://twitter.com/identibyte)
