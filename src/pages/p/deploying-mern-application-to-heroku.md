---
title: "Deploying a MERN Application using MongoDB Atlas to Heroku"
date: "2020-03-21"
pageDescription: "In this article, you'll learn how to deploy a MERN stack application (using MongoDB Atlas as database) to heroku"
pageKeywords: "mern, heroku, mongodb, mongodb atlas, mern stack, deploying to heroku, express, react, nodejs"
tags: ["mern", "heroku"]
cover: "https://res.cloudinary.com/dillionmegida/image/upload/v1584753157/images/blogs_cover/1_qgxaya.png"
---

<div class='toc'>

## Table of contents

- [Introduction to MERN](#introduction)
- [Let's Start Building](#building-process)
  - [Building React App](#building-react)
  - [Creating backend](#creating-backend)
      - [Connect MongoDB Atlas Database](#connect-database)
- [Deploying to Heroku](#deploy-heroku)
  - [Create heroku app](#deploy-heroku-create)
  - [Configure package.json](#deploy-heroku-package-json)
- [Calling APIs on frontend](#calling-apis)
- [Wrap up](#wrap-up)
</div>

<h2>
    <a class='offset_link' name='introduction'></a>
    Introduction to MERN
</h2>

In this article, I'd be building and deploying an application built with the MERN stack to Heroku.

MERN which stands for MongoDB, Express, React and NodeJS is a popular tech stack used in building web applications which involves frontend work (with React), backend work (with Express and NodeJS) and a database (with MongoDB).

Heroku on the other hand is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud - [Documentation](https://www.heroku.com/)

For this article, we'd be using MongoDB Atlas which is a global cloud database service for modern applications. This is more secure than the MongoDB installed locally on our server and it also gives room for more resources on our servers.

We'd be building a simple react project, which makes post requests to an api to add a user and can also make get requests to get all users.

*You can skip to any step with the table of contents listed above.*

<h2>
    <a class='offset_link' name='building-process'></a>
    Building Process
</h2>

You may already have a MERN project which is to be deployed to Heroku, but I'd go over a little project just incase you don't

<h3>
    <a class='offset_link' name='building-react'></a>
    Building React App
</h3>

**Note:** Before we begin with our project, `node` must be installed on your computer. `node` also provides us with `npm` which is used for installing packages.

#### Install `create-react-app`

`create-react-app` is used to create a starter react app.

If you do not have `create-react-app` installed before, type the following in the command line.

```shell
npm i create-react-app -g
```

`-g` flag installs the package globally.

#### Create project directory

```shell
create-react-app my-project
cd my-project
```

The above creates a directory 'my-project' and installs dependencies which would be used in the react starter. After which the directory is changed to the project directory.

#### Start project and make necessary edits

```shell
npm start
```

The above starts the react project, which gives you a url which you preview the project. You make necessary edits on the project like changing images or texts.

#### Install axios

```shell
npm i axios --save
```

`axios` is a javascript library used to make HTTP requests easily. It would be used to send requests from the frontend (React) to the apis provided by the backend

<h3>
    <a class='offset_link' name='creating-backend'></a>
    Creating the backend
</h3>

The backend manages the apis, handles requests and also connects to the database.

#### Install backend packages

```shell
npm i express cors mongoose body-parser --save
```

1. `express`: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web applications - [Documentation](http://expressjs.com/).
2. `cors`: CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options - [Documentation](https://www.npmjs.com/package/cors).
3. `mongoose`: Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks - [Documentation](https://www.npmjs.com/package/mongoose).
4. `body-parser`: Node.js body parsing middleware. - [Documentation](https://www.npmjs.com/package/body-parser).

#### Create backend folder

```shell
mkdir backend
cd backend
```

#### Configure backend

##### Create entry point `server.js`

First, create a `server.js` file, which would be the entry point to the backend

```shell
touch server.js
```

In server.js, type the following

```js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
require('./database');
-----
app.use(bodyParser.json());
app.use(cors());
-----
// API
const users = require('/api/users');
app.use('/api/users', users);
-----
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})
-----
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
```

`express.static` delivers static files which is the one built when `npm run build` is ran on a react project. Remember, the built file is in the build folder.

From our configuration, any request sent to `/api/users` will be sent to `users` api which we about to configure

##### Configure `users` api

```shell
mkdir api
touch api/users.js
```

In touch.js, add the following

```js
const express = require('express');
const router = express.Router()
-----
const User = require('../models/User');
-----
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => console.log(err))
})
-----
router.post('/', (req, res) => {
    const { name, email } = req.body;
    const newUser = new User({
        name: name, email: email
    })
    newUser.save()
        .then(() => res.json({
            message: "Created account successfully"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
        }))
})
module.exports = router 
```

In the above, we create a get and post request handler which fetches all users and posts users. Fetching and adding user to the database is aided by the `User` model created. Let's create the model

##### Create `User` model

```shell
mkdir models
touch models/user.js
```

In user.js, add the following

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
-----
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("User", userSchema, "users")
```

In the above, a schema is created for the user which contains the fields of the user. At the end of the file, the model ("User") is exported with the schema and the collection ("users")

<h5>
    <a class='offset_link' name='connect-database'></a>
    Connect MongoDB Atlas database
</h5>

According to [the docs](https://www.mongodb.com/cloud/atlas)

> MongoDB Atlas is the global cloud database service for modern applications.

Firstly, we'd need to register on Mongo cloud.

Go through [this documentation](https://docs.atlas.mongodb.com/getting-started/) to create an Atlas account and create your cluster.

One thing worth noting is **whitelisting your connection IP address**. If this step is ignored, you won't have access to the cluster so pay attention to that step.

The cluser is a small server which would manage our collections (similar to tables in SQL databases). To connect your backend to the cluster, create a file `database.js` which as we can see is required in `server.js`, then enter the following:

```js
const mongoose = require('mongoose');
const connection = "mongodb+srv://username:<password>@<cluster>/<database>?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
```

In the `connection` variable, enter your `username` (for MongoDB cloud), your `password` (cluster password), your `cluster` (address for your cluster) and the `database` (name of your database). All these can be easily discovered if you followed the documentation

<h2>
    <a class='offset_link' name='calling-apis'></a>
    Calling APIs on the frontend
</h2>

All APIs would be made to `localhost:5000` locally just as we set up in server.js. When deployed to heroku, the server would use the port provided by the server (`process.env.PORT`).

To make things easier, React allows us to specify a proxy which requests would be sent to.

Open `package.json` and just before the last curly brace, and add the following:

```json
"proxy": "http://localhost:5000"
```

This way, we can directly send requests to `api/users`, and when our site is deployed and built, the default port of our application would be used with the same api.

Open `App.js` for React and add the following

```js
import React, {useState, useEffect} from 'react'
import axios from 'axios';
-----
const App = function() {
    const [users, setUsers] = useState(null);

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    useEffect(() => {
        axios.get('/api/users')
            .then(users => setUsers(users))
            .catch(err => console.log(err))
    }, [])

    function submitForm() {
        if(username === '') {
            alert('Please fill the username field');
            return;
        }
        if(email === '') {
            alert('Please fill the email field');
            return;
        }
        axios.post('/api/users', {
            username: username,
            email: email
        })
        .then(function() => {
            alert('Account created successfully')}
            window.location.reload()
        )
        .catch(function() => alert('Could not creat account. Please try again'))
    }
    return (
        <>
            <h1>My Project</h1>
            {users === null ? (
                <p>Loading...</p>
            ) : (
                users.length === 0 ? (
                    <p>No user available</p>
                ) : (
                    <h2>Available Users</h2>
                    <ol>
                        users.map((user, index) => (
                            <li key={index}>
                                Name: {user.name} - Email: {user.email}
                            </li>
                        ))
                    </ol>
                )
            )}
            <form onSubmit={submitForm}>
                <input type='text' placeholder='Enter your username'/>
                <input type='text' placeholder='Enter your email address'/>
                <input type='submit'>
            </form>
        </>
    )
}
export default App
```

`useState` and `useEffect` hooks are used to handle state and sideEffects. What is basically happening is that the first state of users is `null`, and at null, 'Loading...' is showed on the browser. At useEffect, `[]` is used to specify that at `componentDidMount` (when the component is mounted), make a axios request to the api which is running on `localhost:5000`. If the result is gotten and there is no user, 'No user available' is displayed to the user else a numbered list of the users is displayed.

If you want to learn more about about `useState` and `useEffect`, check out this article - [What the heck is React Hooks?](https://blog.soshace.com/what-the-heck-is-react-hooks/)

With the form available, a post request can be made to post a new user. The state of the inputs are controlled and sent to the api on `localhost:5000` on submission. After wards, the page is refreshed and the new user is displayed.

<h2>
    <a class='offset_link' name='deploy-heroku'></a>
    Deploying to Heroku
</h2>

The most exciting part (I guess 😁)

To deploy your application to heroku, you must have a heroku account. Go to [their page](https://www.heroku.com/) to create an account. Then go through [their documention]() on how to create an heroku app. Also check out [the documentation](https://devcenter.heroku.com/articles/heroku-cli) on Heroku CLI

<h3>
    <a class='offset_link' name='deploy-heroku-create'></a>
    Create Heroku App
</h3>

First, login to heroku:

```shell
heroku login
```

This will redirect you to a url on the browser of which you can log in, then you can continue in the terminal.

In the same react project directory, run the following:

```shell
heroku create
```

Tnis would create a heroku application and also give you the url to access the application.

<h3>
    <a class='offset_link' name='deploy-heroku-package-json'></a>
    Configure package.json
</h3>

Heroku uses your package.json file to know which scripts to run and dependencies to install for your project to run successfully.

In your package.json, add the following:

```json
{
    ...
    "scripts": {
        ...
        "start": "node backend/server.js",
        "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install npm && run build"
    },
    ...
    "engines": {
        "node": "10.16.0"
    }
}
```

From the above, heroku runs a post build which as you can see installs your dependencies and runs a build of your react project. Then it starts your project with the `start` script which basically starts your server. And your project works fine.

`engines` specifies the versions of engines like node and npm to install.

#### Push to Heroku

```shell
git push heroku master
```

This pushes your codes to heroku. Remember to include necessary files in `.gitignore`.

After few seconds, you site is ready. If there are any errors, you can check your terminal for results after pushing or going to your dashboard on the browser to view build logs.

Now you can preview your site on the url heroku sent when `heroku create` was ran.

-----

That's all there is to this article. Glad you read it this far.

<h2>
    <a class='offset_link' name='wrap-up'></a>
    Wrap Up
</h2>

Of course there is more to MERN stack applications.

This article did not go as deep as authentications, login, sessions and all that, but just to make deploying MERN stack applications to heroku and working with MongoDB Atlas easy.

Thanks for reading.
