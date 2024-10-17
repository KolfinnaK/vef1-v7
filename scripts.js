// @ts-check

/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á


/**
 * Skilar lengsta orði í streng.
 * @param {string} str Inntaksstrengur.
 * @returns {string|null} Lengsta orðið eða `null` ef inntak er ekki strengur.
 */
function longest(str) {
  if (!isString(str)) return null;
  if (str === '') return '';
  const words = split(str, ' ');
  let longestWord = words[0];
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Prófum longest(str)
console.assert(longest('halló heimur') === 'heimur', 'longest: skilar `heimur` fyrir lengsta orð');
console.assert(longest('whats up everyone') === 'everyone', 'longest: skilar `everyone` fyrir lengsta orð');
console.assert(longest('') === '', 'longest: skilar tómum streng fyrir tóman streng');
/**
 * Skilar stysta orði í streng.
 * @param {string} str Inntaksstrengur.
 * @returns {string|null} Stysta orðið eða `null` ef inntak er ekki strengur.
 */
function shortest(str) {
  if (!isString(str)) return null;
  if (str === '') return '';
  const words = split(str, ' ');
  let shortestWord = words[0];
  for (const word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
}

// Prófum shortest(str)
console.assert(shortest('halló heimur') === 'halló', 'shortest: skilar `halló` fyrir stysta orð');
console.assert(shortest('hæ wassup') === 'hæ', 'shortest: skilar `hæ` fyrir stysta orð');

/**
 * Skilar öfugum streng.
 * @param {string} str Inntaksstrengur.
 * @returns {string|null} Öfugur strengur eða `null` ef inntak er ekki strengur.
 */
function reverse(str) {
  if (!isString(str)) return null;
  return str.split('').reverse().join('');
}

// Prófum reverse(str)
console.assert(reverse('halló') === 'óllah', 'reverse: skilar `óllah` fyrir öfugan streng');
console.assert(reverse('heimur') === 'rumieh', 'reverse: skilar `rumieh` fyrir öfugan streng');


/**
 * Athugar hvort strengur sé samhverfur.
 * @param {string} str Inntaksstrengur.
 * @returns {boolean} `true` ef `str` er samhverfur, annars `false`.
 */
function palindrome(str) {
  if (!isString(str)) return false;
  const lowerStr = str.toLowerCase();
  const reversedStr = lowerStr.split('').reverse().join('');
  return lowerStr === reversedStr;
}

// Prófum palindrome(str)
console.assert(palindrome('anna') === true, 'palindrome: skilar `true` fyrir samhverfan streng');
console.assert(palindrome('halló') === false, 'palindrome: skilar `false` fyrir ósamhverfan streng');

/**
 * Skilar fjölda sérhljóða í streng.
 * @param {string} str Inntaksstrengur.
 * @returns {number} Fjöldi sérhljóða í streng.
 */
function vowels(str) {
  if (!isString(str)) return 0;
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (VOWELS.includes(char)) {
      count++;
    }
  }
  return count;
}

// Prófum vowels(str)
console.assert(vowels('halló') === 2, 'vowels: skilar `2` fyrir 2 sérhljóða');
console.assert(vowels('heimur') === 3, 'vowels: skilar `3` fyrir 3 sérhljóða');

/**
 * Skilar fjölda samhljóða í streng.
 * @param {string} str Inntaksstrengur.
 * @returns {number} Fjöldi samhljóða í streng.
 */
function consonants(str) {
  if (!isString(str)) return 0;
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (CONSONANTS.includes(char)) {
      count++;
    }
  }
  return count;
}

// Prófum consonants(str)
console.assert(consonants('halló') === 3, 'consonants: skilar `3` fyrir 3 samhljóða');
console.assert(consonants('heimurinn') === 5, 'consonants: skilar `5` fyrir 5 samhljóða');

//------------------------------------------------------------------------------
// Leiðbeint ferli

/**
 * Byrjar forritið og leiðbeinir notanda í gegnum ferlið.
 */
function start() {
    alert("Velkomin(n)! Þetta forrit greinir strengi á ýmsan hátt.\n" +
          "Þú verður beðin(n) um að slá inn streng og munt fá niðurstöður fyrir lengsta orð, stysta orð, öfuga röð, fjölda sérhljóða, fjölda samhljóða og ef strengurinn er samhverfur.\n" + 
          "Ýttu á OK til að halda áfram.");
    
    while (true) {
    const inputString = prompt("Vinasamlegast sláðu inn streng:");

    if (inputString === null) {
      alert("Ekkert input. Forrit hættir.");
      console.error("Notandi hætti við.");
      break;
    }

    if (!inputString || inputString.trim() === "") {
      alert("Ógilt inntak: Strengurinn er tómur. Vinsamlegast sláðu inn streng.");
      console.error("Ógilt inntak: Tómur strengur eða bara bil/whitespace.");
      continue;
    }

    const longestWord = longest(inputString);
    const shortestWord = shortest(inputString);
    const reversed = reverse(inputString);
    const vowelCount = vowels(inputString);
    const consonantCount = consonants(inputString);
    const isPalindrome = palindrome(inputString);

    alert(
      `Niðurstöður:\n` +
      `Lengsta orð: ${longestWord}\n` +
      `Stysta orð: ${shortestWord}\n` +
      `Öfugur strengur: ${reversed}\n` +
      `Fjöldi sérhljóða: ${vowelCount}\n` +
      `Fjöldi samhljóða: ${consonantCount}\n` +
      `Er strengurinn samhverfur: ${isPalindrome}`
    );

    const tryAgain = confirm("Viltu skoða annan streng?");
    if (!tryAgain) {
      break;
    }
  }
}