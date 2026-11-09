# Merge sorted arrays

This project has a `merge` function that combines three arrays into one array in ascending order.

The first two arrays need to be in ascending order, while the third array needs to be in descending order. For example:

```text
[1, 4, 7], [2, 5, 8], [9, 6, 3]
```

The result is:

```text
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

I compare the next number from each array and add the smallest one to the result. For the third array, I start at the end since its smallest number is there. I repeat this until there are no numbers left. I don't use a sort function.

## Setup

You'll need Node.js 22.18 or later. Install the dependencies with:

```bash
npm install
```

## Run the example

```bash
npm start
```

To try different numbers, change the arrays in `example.js` and run the command again.

## Run the tests

```bash
npm test
```

To compile the TypeScript code, run:

```bash
npm run build
```
