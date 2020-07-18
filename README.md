# Pattern-Server-Typescript
 My recommendation to standardize your project's backend, enjoy!


### 
My only goal here is to help you standardize your project automatically, increasing your productivity, and the productivity of your team, facilitating conversation in different operating systems and helping to keep code clean and understandable by everyone. Come on!


💡 First, I will show you some tools that need to be installed and that will serve in our learning!

  - Node
  - Yarn
  - Visual Studio Code

##### Seriously, all of that!
###### Ok, Lets go!


First create a folder to start the application backend, and then immediately, access it through the terminal of your choice.

```bash
# Starting the Package.json
$ yarn init -y

# Adding TSC to the project
$ yarn add tsc
💡 Note: Here we will add the file tsconfig.json and we will be able to convert all Typescript code into Javascript


# Adding ExpressJs
$ yarn add express
💡 Note: We then added a framework for handling requests, I chose ExpressJs

# Adding Ts Node Dev
$ yarn add ts-node-dev
💡 Note: Here we add a project change watcher, while constantly running the server

```

### Adding some scripts
After installing your Visual Studio code, in your terminal type:

```bash
# Open your Project in Visual Studio Code
$ code .

```
###### Simple, isn't it?

Now, opening the package.json file, under license, let's include some scripts.

```bash
# We will call it 'dev: server', it will bring up the execution of ts-node-dev on top of our server.js file
 "scripts": {
    "build": "tsc",
    "dev:server": "ts-node-dev src/server.ts"
  },
# When saving, we can start a terminal within the visual itself and run the command 'yarn dev:server'


```
### Now, some hacks.

We will dramatically increase our compilation speed

```bash
# Definition
1. ** --inspect: ** adds permission for the debugger to observe the application.
2. ** --ignore-watch node_modules: ** causes it to ignore the node_modules folder when executing the project
3. ** --transpileOnly: ** The flag indicates that it only transpils the code and does not check whether it is right or wrong.
4. ** --respawn: ** The flag is for ts-node-dev to observe changes in the code, to transpile and auto-reload the application.
5. ** --no-notify: ** The flag is used to remove server update notifications from the node.
```
We can add some flags to our script ignoring some conditions and increasing our compilation speed, they may not be as noticeable on a small project, but try removing some of them when your project is bigger!

Now an example of what your script would look like

```bash
"scripts": {
    "build": "tsc",
    "dev:server": "ts-node-dev --inspect --ignore-watch node_modules --transpileOnly src/server.ts"
  },
  
```
### Now let's go to the REALLY IMPORTANT part, the standardization of the code

Still at the terminal, let's add our dear Eslint!

```bash
# Add the Eslint
$ yarn add eslint -D

```
Still in the terminal we will choose some options to standardize our code.
Have it as a style guide!

The settings can be made in three different ways, namely:

Answer questions about your style.

Answering style questions
Selecting this configuration option, we must answer some questions:

```bash

Use a popular style guide?
Use a popular style guide? Yes, I Chose AirBNB

Are you using ECMAScript 6 features?
Are we using JavaScript ES6 features? Yes

Are you using ES6 Modules?
Are we using the ES6 module system? Yes

Where will you code run?
Where will our code run? Node. (it's a server example)

Do you use CommonJS?
Do we use the CommonJS module loading system? No

Do you use JSX?
Do we use JSX? No

What style of indentation do you use?
What kind of identification do we use? Spaces (spaces).

What quotes do you use for strings?
What kind of quotes will we use to declare strings? Single.

What line endings do you use?
How should our lines end? Unix.

💡 Note: If we choose the Unix type, our lines must end with \ n, however, when we choose Windows they must 
end with \ r \ n (for those who do not know \ r it would be return and \ n would be line).

Do you require semicolons?
Will we oblige the information of semicolons (;)? Yes (Y abbreviation of yes).

What format do you want you config file to be in?
What file format do we want to save our settings to? JSON.
```
And finally, all the questions are answered, in that way, a new file called .eslintrc.json must have been created at the root of the project.

Antônio Bernardino 👋🏽 [Entre em contato!](https://www.linkedin.com/in/tony-silva/)
