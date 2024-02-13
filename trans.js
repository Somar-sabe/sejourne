// JavaScript
var translations = {
    "en": {
        "translate": "Translate",
  },
    "ar": {
        "translate": "ترجمة",  
    },
    "fr": {
        "translate": "Traduire",
    }
};

// Function to translate text based on selected language
function translateText(lang) {
    var translation = translations[lang]["translate"];
    document.getElementById('translateButton').textContent = translation;
}

// Event listener for language selection change
document.getElementById('languageSelect').addEventListener('change', function(event) {
    var selectedLanguage = event.target.value;
    translateText(selectedLanguage);
});

// Initial translation based on the default selected language
translateText(document.getElementById('languageSelect').value);
