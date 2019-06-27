# dbwebb-updater [![Build Status](https://travis-ci.com/henrikfredriksson/dbwebb-updater.svg?branch=master)](https://travis-ci.com/henrikfredriksson/dbwebb-updater) [![Build Status](https://scrutinizer-ci.com/g/henrikfredriksson/dbwebb-updater/badges/build.png?b=master)](https://scrutinizer-ci.com/g/henrikfredriksson/dbwebb-updater/build-status/master) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/henrikfredriksson/dbwebb-updater/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/henrikfredriksson/dbwebb-updater/?branch=master)

A small CLI app to update dbwebb-course repos with .

Requires [`dbwebb-cli`](https://github.com/dbwebb-se/dbwebb-cli)

## Configuration

Create a `.dbwebb-update` in your home directory

```json
{
    "path": "~/dbwebb-kurser/",
    "courses": [
        "databas",
        "design",
        "htmlphp",
        "javascript1",
        "oophp",
        "oopython",
        "python",
        "webapp"
    ]
}
```

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
$ installer dbwebb-updater /usr/local/bin/dbwebb-update
```
