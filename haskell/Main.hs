#!/usr/bin/env stack
{-# LANGUAGE OverloadedStrings #-}

import Control.Lens ((&), (^.), (.~))
import Data.Aeson
import Network.Wreq

-- Using Identibyte in a Haskell application
--
-- This example shows how you can integrate Identibyte with a Haskell
-- application by making a simple HTTP request to the /checks endpoint
-- to see if an email is disposable.
data CheckBody = CheckBody { emailDisposable :: Bool } deriving (Show)
instance FromJSON CheckBody where
  parseJSON = withObject "check" $ \o ->
    CheckBody <$> ((o .: "email") >>= (.: "disposable"))

main = do
    -- Define the API endpoint and request settings
    let email = "email@mailinator.com"
    let opts = defaults & auth .~ Just (basicAuth "API_TOKEN" "")

    -- Make the request and check if the email is disposable
    r <- asJSON =<< getWith opts ("https://identibyte.com/check/" ++ email)
    let result = if (emailDisposable (r ^. responseBody)) == True then "Yes" else "No"

    -- Print the result
    putStrLn $ "Is " ++ email ++ " disposable? " ++ result
