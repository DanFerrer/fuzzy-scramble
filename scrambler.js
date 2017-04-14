const Scrambler = (function () {
	function Scrambler(options = {}) {
		return new Scrambler.fn.init(options);
	}

	function _randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	const fillers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+={[]}<,.>/?:';

	Scrambler.fn = Scrambler.prototype = {
		defaults: {
			message: 'Elegantly unscramble this message using the space provided. Then write the scrambler that made it. The answer is an object with global scope that can scramble and unscramble any text any number of times.',
			lineLength: 100,
			maxFillers: 50,
			minFillers: 20
		},
		init: function(options) {
			if (Object.prototype.toString.call(options) !== '[object Object]') throw new Error('Opts must be a object {}');

			if (options.maxFillers > options.lineLength) throw new Error('maxFillers cannot be greater than lineLength');

			for (let prop in this.defaults) {
				if (this.defaults.hasOwnProperty(prop)) {
					this[prop] = options[prop] || this.defaults[prop];
				}
			}

			this.charCount = 0;
			this.lineCount = 0;
			this.scrambled = null;

			return this;
		},
		scramble: function() {
			let scrambled = ``;

			this.charCount = 0;
			this.lineConunt = 0;

			for (let i = 0; i < this.message.length; i++) {
				let numOfFillers = _randomInt(this.minFillers, this.maxFillers);

				scrambled += `<span hidden>${this.message[i]}</span>`;

				for (let j = 0; j <= numOfFillers; j++) {
					let fillerIndex = _randomInt(0, fillers.length -1);

					scrambled += `<span>${fillers[fillerIndex]}</span>`;

					this.charCount++

					if (this.charCount % this.lineLength === 0) {
						scrambled += '<br />';
						this.lineCount++;
					}
				}
			}

			this.scrambled = scrambled;

			return this.scrambled;
		},
		unscramble: function() {
			let unscrambled = '<span>';
			let regex = /<span hidden>(.)/g;
			let matches;

			while ((matches = regex.exec(this.scrambled)) !== null) {
				unscrambled += matches[1];
			}

			unscrambled += '</span>';
			return unscrambled;

		},
	};

	Scrambler.fn.init.prototype = Scrambler.fn;

	return (window.Scrambler = Scrambler);
})();
