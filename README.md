# dbwebb-updater

A small CLI app to update dbwebb-course repos.

Requires [`dbwebb-cli`](https://github.com/dbwebb-se/dbwebb-cli)

## Configuration

Set `dbwebbDirectory` to point to your courses folder, e.g.

```js
const dbwebbDirectory = '~/dbwebb-kurser/';
```

Add course to `courses` to be tracked, e.g.

```js
const courses = [
    'databas',
    'design',
    'htmlphp',
    'javascript1',
    'oophp',
    'oopython',
    'python',
    'webapp',
    'all'
];
```

The option `all` will update all courses in the `dbwebbDirectory`.

## Installation

Install dependencies

```
yarn install #npm install
```

Make it executable by running:

```sh
$ chmod +x app.sh
```

or create a single executable file

```
yarn build # npm run build
```

Install the application globally by running:

```sh
$ install dbwebb-updater /usr/local/bin/dbwebb-update
```
