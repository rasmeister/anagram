/**
 * Created by RodS on 30/05/2015.
 */


(function($) {
    $(function() {
        /**
         * related functions for managing anagram detection in lower-case, non-punctuated words
         * @returns {{groupAnagrams: groupAnagrams, splitListIntoWords: splitListIntoWords, wordToPrimeProduct: wordToPrimeProduct}}
         */
        function anagram() {
            // parameter - a string representing a list of space-delimited words
            // returns an array of string arrays where the internal
            // string arrays are anagrams of each other
            // Example: Input - 'aim tar ami the rat'
            //   would return - [[ami, aim], [the], [tar, rat]]

            var primes = prime.generate_primes(26),
                char_a = "a".charCodeAt(0);

            /**
             * Analyzes a list of words to group those that are anagrams of each other
             * Example: Input - 'aim tar ami the rat'
             *   would return - [[ami, aim], [the], [tar, rat]]
             * @param {string} listOfWords - list of words separated by white-space
             * @returns {Array} - array of arrays, grouping words that are anagrams of each other in inner array
             */
            var groupAnagrams = function(listOfWords) {
                var idx, results = [],
                    temp_results = {},
                    words = splitListIntoWords(listOfWords),

                    // iterate through each word converting letters to primes and storing the product of the primes
                    wordProducts = words.map(wordToPrimeProduct);
                for (idx=0; idx<wordProducts.length; idx++) {
                    if (temp_results[wordProducts[idx]]) {
                        temp_results[wordProducts[idx]].push(words[idx]);
                    } else {
                        temp_results[wordProducts[idx]] = [words[idx]];
                    }
                }

                // convert object to array that contains arrays of related words that are anagrams of each other
                idx = 0;
                for (var item in temp_results) {
                    results[idx] = temp_results[item];
                    idx++;
                }

                return results;
            };

            var splitListIntoWords = function(list) {
                return list.match(/\w+/g);
            };

            var wordToPrimeProduct = function(word) {
                var idx, product = 1;
                for (idx = 0; idx < word.length; idx++) {
                    product = product * primes[word.charCodeAt(idx) - char_a];
                }
                return product;
            };

            return {
                groupAnagrams      : groupAnagrams,
                splitListIntoWords : splitListIntoWords,
                wordToPrimeProduct : wordToPrimeProduct

            }
        }

        window.anagram = anagram();
    });
}(jQuery));
