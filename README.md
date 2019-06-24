# dbwebb-updater

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
