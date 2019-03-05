var tokenize = require('./tokenize');
var languageProcessor = require('./processor');

var Negative = function (options) {
    this.options = options;
};

Negative.prototype.analyze = function (phrase) {
    if (typeof phrase === 'undefined') phrase = '';

    var languageCode = 'en';
    var labels = languageProcessor.getLabels(languageCode);

    var tokens      = tokenize(phrase),
        score       = 0,
        words       = [],
        positive    = [],
        negative    = [];

    var i = tokens.length;
    while (i--) {
        var obj = tokens[i];
        if (!labels.hasOwnProperty(obj)) continue;
        words.push(obj);

        var tokenScore = labels[obj];
        tokenScore = languageProcessor.applyScoring(languageCode, tokens, i, tokenScore);
        if (tokenScore > 0) positive.push(obj);
        if (tokenScore < 0) negative.push(obj);
        score += tokenScore;
    }

    var result = {
        score:          score,
        tokens:         tokens,
        positive:       positive,
        negative:       negative
    };
    return result;
};

module.exports = Negative;
