# Fuzzy Scrmabler

Scramble and unscramble text any number of times with any number of filler characters

# How to use

  - include scramble.js in HTML file
  - save call to scrambler function and pass in options (if any)
  - open index.html to launch demo

```javascript
let options = {
    message: 'Elegantly unscramble this message using the space provided. Then write the scrambler that made it. The answer is an object with global scope that can scramble and unscramble any text any number of times.',
	lineLength: 100,
	maxFillers: 50,
	minFillers: 20
};

let scrambler = Scrambler(options);
```


Call scramble and unscramble methods to manipulate text:

```javascript
scrambler.scramble();
scrambler.unscramble();
```

