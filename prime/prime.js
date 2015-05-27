/**
 * Created by RodS on 27/05/2015.
 */

(function(prime, $) {
    $(function() {
        var generate_primes = function(form) {
            var count = parseInt($("#prime_number_count").val());
            $("#results").html("<p>" + getPrimeNumbers(count) + "</p>");
            return false;   // prevent form submission
        };

        var getPrimeNumbers = function(count) {
            var prime_numbers = [2, 3, 5, 7, 11, 13];
            var result = prime_numbers.slice(0,count);
            return result.toString();
        };
        prime.generate_primes = generate_primes;
    });
})(window.prime = window.prime || {}, jQuery);
