const axios = require('axios');

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

function underscoreToCamel(str) {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}

function convertKeysToCamelCase(obj) {
  if (Array.isArray(obj)) {
    return obj.map(v => convertKeysToCamelCase(v));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce((result, key) => {
      const newKey = underscoreToCamel(key);
      result[newKey] = convertKeysToCamelCase(obj[key]);
      return result;
    }, {});
  }
  return obj;
}

async function getAutocomplete(seriesId, bookId, chapterId) {
  try {
    const response = await axios.get(`${backendUrl}/autocomplete/${seriesId}/${bookId}/${chapterId}`, {
      headers: {
        "ngrok-skip-browser-warning": "skip"
      },  
      crossDomain: true
    });
    const characters = response.data.characters;
    const camelCaseCharacters = convertKeysToCamelCase(characters);

    const formattedCharacters = camelCaseCharacters.flatMap(character => {
      const primaryNameEntry = { display: character.primaryName, id: character.primaryName };
      const alternateNamesEntries = character.alternateNames.map(name => ({ display: name, id: character.primaryName }));
      return [primaryNameEntry, ...alternateNamesEntries];
    });

    return formattedCharacters.sort((a, b) => a.display.localeCompare(b.display));
  } catch (error) {
    console.error('Error fetching autocomplete data:', error);
    throw error;
  }
}

module.exports = getAutocomplete;
