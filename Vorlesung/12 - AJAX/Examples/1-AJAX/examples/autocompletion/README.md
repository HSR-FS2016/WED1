Autocompletion-API
==================

Requirements
------------
* npm/node

Installation
------------

```
cd "to-autocompletion-directory"
npm install
```

Usage
-----

* run `npm start` to start the application
* Call `http://localhost:8080/complete?search={searchString}`
  to get autocompletions for {searchString}.
  Example:
  `http://localhost:8080/suggestions?search=Flughafen`
  Result:
  ```
  <option value="Zürich, Flughafen">
  <option value="Genf, Flughafen">
  ```