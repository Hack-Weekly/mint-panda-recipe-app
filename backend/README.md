# mint-panda recipe app

  

Backend services for **`Mint Panda Recipe App`**

  

  

# Tech

  

**`Mint Panda Recipe App`** used some of the following tech and architecture for this project:

  

- [Typescript](https://automapper.org/) - for type-safety JS development.

- [Express](https://learn.microsoft.com/en-us/ef/) - framework for minimal api development.

- [Prisma](https://www.npgsql.org/) - an ORM for interacting the Database

- [Postgresql](https://www.nuget.org/packages/Microsoft.Extensions.Caching.StackExchangeRedis/8.0.0-preview.3.23177.8) - Database service

  

***TBA (To be Added)***

For Authentication:

- [Argon2](https://www.npgsql.org/) - for password hashing.

- [PassportJS]() - authentication provider

  
  

  

# Installation

  

***Pre-requisites:***

  

- Clone this repository

- Install **Docker** here => https://www.docker.com/

  

#### Optional (For API Testing):

- Install **POSTMAN** here => https://www.postman.com/

    - OR Install **REST Client** here => https://marketplace.visualstudio.com/items?itemName=humao.rest-client

  
  

- **Required: Create an `.env` file inside the `/backend` folder, and copy-paste these contents inside the `.env` file:**

  

```sh

DB_HOST=appdb
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD=root
DB_NAME=recipe_db

  
PGA_PORT=5050
PGA_EMAIL=admin@admin.com
PGA_PASSWORD=root

  
DATABASE_URL=postgresql://admin:root@localhost:5432/recipe_db
PORT=8080
CLIENT_URL=http://localhost:5137
```

  

  

### For Initializing/Starting the application and the docker apps, kindly enter these commands below:

  

***Note***: You should be inside of the `/backend` folder

1. This will perform db migration and seeding data to the database
```sh
npm i
npx prisma migrate dev
```
  
2. This will run the docker containers
```sh

docker compose --env-file .env up -d --build

```

  
You can now use the app with specific URLs:

- `localhost:5000` for normal client calls/requests

  
# Endpoints

**Ingredients**

| api| methods | description

|  --------  |  -------  |  -------  |

| /api/ingredients| /GET | Get all ingredients

| /api/ingredients/:id | /GET/:id | Get ingredient by id

| /api/ingredients | /POST | Add ingredient

| /api/ingredients/:id | /PATCH/:id | Update ingredient

| /api/ingredients/:id | /DELETE/;:id | Delete ingredient

  

***Request/Response Body***

- /GET /api/ingredients

```JSON
// Response
{
    id: string,
    name: string
}

```

  

- /GET /api/ingredients/:id

```JSON
// Response
{
    id: string,
    name: string
}
```

  

- /POST /api/ingredients

```JSON
// Request
{
    name: string
}

// Response
{
    status:  number,
    message:  string
}

```

  

**Recipe**

| api| methods | description

|  --------  |  -------  |  -------  |

| /api/recipes| /GET | Get all recipes

| /api/recipes/:id | /GET/:id | Get recipe by id

| /api/recipes| /POST | Add recipe

| /api/recipes/like/:id | /POST/like/:id | Like recipe

| /api/recipes/unlike/:id | /POST/unlike/:id | Unlike recipe

| /api/recipes/:id | /DELETE/;:id | Delete recipe

  

- /GET /api/recipes

```JSON
// Response
{
    results: [
        {
            id:  string,
            title:  string,
            serving:  number,
            imageurl:  string,
            like: number,
            created_at:  string | DateTime,
            updated_at:  string | DateTime
        }
    ],
    pageData:  
    {
        page:  number,
        pageSize:  number,
        totalItemsCount:  number,
        totalPageCount:  number,
        hasPreviousPage:  bool,
        hasNextPage:  bool
    }
}

```

  

- /GET /api/recipes/:id

```JSON
// Response
{
    id:  string,
    title:  string,
    serving:  number,
    instruction:  string,
    imageurl:  string,
    like: number,
    created_at:  string | DateTime,
    updated_at:  string | DateTime,
    recipe_ingredient_link:  [
        id: string,
        name: string,
        amount: number
    ],
    recipe_tag_link:  [
        id: string,
        name: string
    ]
}

```

  

- /POST /api/recipes

```JSON
// Request
{
	{
		title:  string,
        imageUrl:  string,
        serving:  number,
        instruction:  strng,
        tags:  [
		    {
			  id:  string
	        }
		],
        ingredients:  [
            {
                id:  string,
                amount:  number
            }
        ]
    }
}

// Response
{
    status:  number,
    message:  string
}
```

  
  

**Tags**

| api| methods | description

|  --------  |  -------  |  -------  |

| /api/tags| /GET | Get all tags

| /api/tags/:id | /GET/:id | Get tag by id

| /api/tags| /POST | Add tag

| /api/tags/:id | /DELETE/;:id | Delete tag

  

- /GET /api/tags

```JSON
// Response
{
    id: string,
    name: string
}
```

  

- /GET /api/tags/:id

```JSON
// Response
{
    id: string,
    name: string
}
```

  

- /POST /api/tags

```JSON

// Request
{
    name: string
}  

// Response

{
	status:  number,
    message:  string
}
```