# Project: Bearer-Auth

## Author: Hayden Cooper

## Problem Domain

At this point, our auth-server is able to allow a user to create an account as well as to handle Basic Authentication (user provides a username + password). When a “good” login happens, the user is considered to be “authenticated” and our auth-server generates a JWT signed “Token” which is returned to the application

We will now be using that Token to re-authenticate users to shield access to any route that requires a valid login to access.

## Links and Resources

- [GitHub Actions ci/cd](https://github.com/Hcooper23/bearer-auth/actions/new)
- [back-end dev server url](https://bearer-auth-9n3i.onrender.com/)

## Collaborators

## Setup ///

## `.env` requirements (where applicable)

node version "v19.6.1"

## How to initialize/run your application (where applicable)

clone repo, `npm i`, then run `nodemon` in the terminal

## Routes

- Npm Test and install npm Jest if no test runs

## Tests

to run tests, after running `npm i`, run the command `npm test`

## UML

![UML image](./basic-auth.png)
