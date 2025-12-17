// Générateur de clés de sécurité optimisé en mémoire, basé sur le crible d'Ératosthène et utilisant tous les caractères ASCII

/**
 * Implémente le crible d'Ératosthène de manière optimisée en mémoire.
 * @param {number} limit - La limite supérieure pour la recherche de nombres premiers.
 * @returns {number[]} - Un tableau de nombres premiers.
 */
function eratostheneSieve(limit) {
    // Utilise un Uint8Array pour réduire l'empreinte mémoire
    const sieve = new Uint8Array(limit + 1).fill(1);
    sieve[0] = 0;
    sieve[1] = 0;

    for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (sieve[i] === 1) {
            for (let j = i * i; j <= limit; j += i) {
                sieve[j] = 0;
            }
        }
    }

    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (sieve[i] === 1) {
            primes.push(i);
        }
    }

    return primes;
}

/**
 * Génère une clé de sécurité à partir d'une liste de nombres premiers et de caractères ASCII.
 * @param {number[]} primes - Liste de nombres premiers.
 * @param {number} length - Longueur souhaitée pour la clé.
 * @returns {string} - La clé de sécurité générée.
 */
function generateSecurityKey(primes, length) {
    const asciiChars = [];
    for (let i = 33; i <= 126; i++) {
        asciiChars.push(String.fromCharCode(i));
    }

    let key = '';
    for (let i = 0; i < length; i++) {
        const randomIndexPrime = Math.floor(Math.random() * primes.length);
        const randomIndexChar = Math.floor(Math.random() * asciiChars.length);
        
        // Alterne entre un nombre premier et un caractère ASCII pour plus de variété
        key += i % 2 === 0 ? primes[randomIndexPrime].toString() : asciiChars[randomIndexChar];
    }
    return key;
}

// Utilise un timestamp réduit (par exemple, modulo 1000000) pour éviter un crible trop grand
const timestamp = Math.floor(Date.now() / 1000);
const limit = timestamp % 1000000; // Limite la taille du crible pour optimiser la mémoire
const primes = eratostheneSieve(limit);
const keyLength = 32;
const securityKey = generateSecurityKey(primes, keyLength);

console.log(`Clé de sécurité générée (${keyLength} caractères) : ${securityKey}`);