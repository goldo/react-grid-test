# React grid test

_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._

This project aims to answer this react grid technical test/challenge:
https://gist.github.com/barnaby/1e025c5aede6d205faa416b76c33fe22

## Install

```
npm install
```

## Start

It will launch both the node server with `http-serve` and the webpack dev server for the client with `react-scripts`

```
npm start
```

#### Server + Client

If you want to start the server & client in two different terminal tabs, you can launch them separately

```
npm run server
npm run client
```

## Data

The data is a JSON Array returning 200 000 lines of users:

```
 {
   "date": "09/09/1998",
   "email": "kasi@nibanav.hk",
   "first": "Ella",
   "last": "Phelps",
   "age": 41,
   "city": "Azehopor",
   "country": "YT"
 }
```

### DataGrid

DataGrid is a react component which requires 2 props:

- data
- columns

In this case, columns are defined like this (in `config.js`):

```
 [
  'date',
  'email',
  'first',
  'last',
  'age',
  'city',
  'country',
]
```

## test

```
npm test
```

But there's no test currently.. :(

## build

```
npm run build
```
