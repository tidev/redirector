# Website Redirector

## Setup

Create your app in Dokku, then set the `REDIRECT_TO` environment variable.

## Deploy

One time:

	git remote add dokku dokku@<domain>:<app>

Then to release:

	git push dokku main
