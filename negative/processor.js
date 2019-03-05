var enLanguage = require('./enIndex');
Object.assign(enLanguage.labels);

var languages = {
    en: enLanguage
};

module.exports = {
    getLanguage: function(languageCode) {
        if (!languageCode) {
            return languages.en;
        }
        var language = require('./enIndex');
        return languages[languageCode];
    },

    getLabels: function(languageCode) {
        var language = this.getLanguage(languageCode);
        return language.labels;
    },

    applyScoring: function(languageCode, tokens, cursor, tokenScore) {
        var language = this.getLanguage(languageCode);
        var Scoring = language.Scoring || defaultScoring;
        return Scoring.apply(tokens, cursor, tokenScore);
    }
};

var defaultScoring = {
    apply: function(tokens, cursor, tokenScore) {
        return tokenScore;
    }
};
