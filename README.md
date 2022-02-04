# Mongoose-CLI


## Requirements
- .env file with MongoDB URI
- Mongoose
- Yargs
- dotenv


## How to Use


#### Add a Movie

Each movie must include a **title** and the **year** it was released. 

```node src/app.js --add --title="The Notebook" --year=2004```

Optional properties: 

- **actor:** ```--actor="Ryan Gosling"```
- **genre:** ```--genre="Romance"```
- **rating:** ```--rating="15A"```


#### Find a Movie

Find and list a specific movie using the its given **title** and **year:** 

```node src/app.js --listOne --title="The Notebook" --year=2004```


#### Find Movies by Property

Find and list multiple movies with filtered search results.

- Find by **title:** ```node src/app.js --list --title="The Notebook"```
- Find by **year:** ```node src/app.js --list --year=2004```
- Find by **actor:** ```node src/app.js --list --actor="Ryan Gosling"```
- Find by **genre:** ```node src/app.js --list --genre="Romance"```
- Find by **rating:** ```node src/app.js --list --rating="12A"```


#### Update a Movie

Update a movie's property. You may only update one property at a time.

```node src/app.js --update --title="The Notebook" --year=2004 --newproperty="<newvalue>"```

- Update **title:** ```--newtitle="Notebook"```
- Update **year:** ```--newyear=2005```
- Update **actor:** ```--newactor="Rachel McAdams"```
- Update **genre:** ```--newgenre="Drama"```
- Update **rating:** ```--newrating="15"```


#### Delete a Movie

Delete a specific movie using the its given **title** and **year:** 

```node src/app.js --delete --title="The Notebook" --year=2004```


#### Delete Movies by Property

Delete multiple movies by property filter. You may only use one filter at a time.

- Delete by **title:** ```node src/app.js --deleteAll --title="The Notebook"```
- Delete by **year:** ```node src/app.js --deleteAll --year=2004```
- Delete by **actor:** ```node src/app.js --deleteAll --actor="Ryan Gosling"```
- Delete by **genre:** ```node src/app.js --deleteAll --genre="Romance"```
- Delete by **rating:** ```node src/app.js --deleteAll --rating="12A"```


#### Delete All Movies

Delete all movies in the database:

```node src/app.js --deleteAll```
