// Générateur de clés de sécurité basé sur le crible d'Ératosthène

/**
 * Implémente le crible d'Ératosthène pour trouver les nombres premiers jusqu'à une limite donnée.
 * @param {number} limit - La limite supérieure pour la recherche de nombres premiers.
 * @returns {number[]} - Un tableau de nombres premiers.
 */
function eratostheneSieve(limit) {
    const sieve = new Array(limit + 1).fill(true);
    sieve[0] = false;
    sieve[1] = false;

    for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= limit; j += i) {
                sieve[j] = false;
            }
        }
    }

    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (sieve[i]) {
            primes.push(i);
        }
    }

    return primes;
}

/**
 * Génère une clé de sécurité à partir d'une liste de nombres premiers.
 * @param {number[]} primes - Liste de nombres premiers.
 * @param {number} length - Longueur souhaitée pour la clé.
 * @returns {string} - La clé de sécurité générée.
 */
function generateSecurityKey(primes, length) {
    let key = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * primes.length);
        key += primes[randomIndex].toString();
    }
    return key;
}

// Exemple d'utilisation
const limit = 1000;
const primes = eratostheneSieve(limit);
const keyLength = 16;
const securityKey = generateSecurityKey(primes, keyLength);

console.log(`Clé de sécurité générée (${keyLength} chiffres) : ${securityKey}`);