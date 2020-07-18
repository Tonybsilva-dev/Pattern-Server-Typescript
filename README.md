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

## Adding some scripts
After installing your Visual Studio code, in your terminal type:

```
# Open your Project in Visual Studio Code
$ code .

```
Now, opening the package.json file, under license, let's include some scripts.

```
# We will call it 'dev: server', it will bring up the execution of ts-node-dev on top of our server.js file
$ "scripts": {
    "build": "tsc",
    "dev:server": "ts-node-dev src/server.ts"
  },
# When saving, we can start a terminal within the visual itself and run the command 'yarn dev: server'


```



Antônio Bernardino 👋🏽 [Entre em contato!](https://www.linkedin.com/in/tony-silva/)
