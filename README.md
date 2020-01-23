# How To Use

## Instalation

From your command line:

```sh
# Clone this repository
$ git clone https://github.com/ricardoemerson/simple

# Go into the repository
$ cd simple

# Install dependencies
$ yarn install

# Run the app
$ yarn dev
```

# Settings

## Database

In `.env` file put your database credentials for postgresql.
```sh
# Database
DB_HOST=localhost
DB_USER=postgres
DB_PASS=docker
DB_NAME=my-db
```
## Queries

In `src/app/controllers/HelloController.js` file update the queries due your database schema.

```js
async index(req, res) {
  const data = await sequelize.query(
    'SELECT id, name, email, provider FROM users ORDER BY name',
    {
      type: QueryTypes.SELECT,
    },
  );

  return res.json(data);
}
```

## Routes

In `src/routes.js` you will find all routes for the resources.

```js
routes.get('/hello', (req, res) => res.json({ hello: 'world' }));

routes.get('/users', HelloController.index);
routes.get('/users/:id', HelloController.show);
routes.get('/complex', HelloController.complex);
```
