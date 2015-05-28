/**
 * Created by RodS on 27/05/2015.
 */

(function(prime, $) {
    $(function() {
        var display_primes = function() {
            var count = parseInt($("#prime_number_count").val());
            $("#results").html("<p>" + generate_primes(count) + "</p>");
            return false;   // prevent form submission
        };

        /**
         * Generate a collection of prime numbers (starting with 2)
         * A prime number is one that is not divisible by any of the prior prime numbers
         *
         * @param count - number of prime numbers to return
         * @returns array of integers representing the collection of prime numbers
         */

        var generate_primes = function(count) {
            // validate the count
            var prime_numbers = [2],
                candidate = 3;
            if (count < 1 || count > 30) {
                return "Count must be between 1 and 30, inclusive";
            }

            while (prime_numbers.length < count) {
                // is current candidate divisible by any of our found primes?
                var isDivisible = false,
                    primes_so_far = prime_numbers.length;
                for (var idx = 0; idx < primes_so_far; idx++) {
                    var prime = prime_numbers[idx];
                    if (Math.floor(candidate / prime) * prime === candidate) {
                        isDivisible = true;
                        break;
                    }
                }
                if (!isDivisible) {
                    // we have a prime number!
                    prime_numbers.push(candidate);
                }
                candidate++;
            }
            return prime_numbers;
        };

        prime.display_primes = display_primes;
        prime.generate_primes = generate_primes;
    });
})(window.prime = window.prime || {}, jQuery);
