/**
 * Calculates Mersenne primes up to a limit provided by user input.
 * 
 * @param {number} limit - The upper limit for calculating Mersenne primes.
 * @returns {number[]} An array of Mersenne primes up to the given limit.
 * @throws {Error} Throws an error if the limit is too large.
 */
function calculateMersennePrimes(limit) {
    if (limit > 1000000) {
        throw new Error("The limit is too large. Please provide a smaller limit.");
    }

    /**
     * Checks if a number is prime.
     *
     * @param {number} num - The number to check for primality.
     * @returns {boolean} True if the number is prime, false otherwise.
     */
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    /**
     * Checks if a number is a Mersenne prime.
     *
     * @param {number} num - The number to check for Mersenne primality.
     * @returns {boolean} True if the number is a Mersenne prime, false otherwise.
     */
    function isMersennePrime(num) {
        let mersenneNum = Math.pow(2, num) - 1;
        return isPrime(mersenneNum);
    }

    let mersennePrimes = [];
    for (let i = 2; i <= limit; i++) {
        if (isMersennePrime(i)) {
            mersennePrimes.push(i);
        }
    }
    return mersennePrimes;
}

// Usage Example

try {
    const limit = 1000;
    const primes = calculateMersennePrimes(limit);
    console.log(`Mersenne primes up to ${limit}: ${primes.join(", ")}`);
} catch (error) {
    console.error(error.message);
}
