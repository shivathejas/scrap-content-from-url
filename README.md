# scrap-content-from-url
Scraping the content like title, description and images from the provided url in the API.

  - We have one REST endpoint of HTTp type POST
  - regular expression is added to validate the URL
  - We can scrap the data from any of the website.
### Tech

Application uses a number of open source projects to work properly:

* [node.js] - runtime environment.
* [Express] - fast node.js network app framework.
* [mocha, expect, supertest] - Used for implemnting the unit test cases.
* [morgan] - Used for logging the HTTP request.

### Installation
Install the dependencies and devDependencies and start the server.

```sh
$ cd scrap-content-from-url-master
$ npm install
$ node app
```
