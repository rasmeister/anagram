/**
 * Created by RodS on 27/05/2015.
 */

function generate_primes(form) {
    var count = parseInt($("#prime_number_count").val());
    var prime_numbers = [2, 3, 5, 7, 11, 13];
    var result = prime_numbers.slice(0,count);
    $("#results").html("<p>" + result.toString() + "</p>");
    return false;   // prevent form submission
}
