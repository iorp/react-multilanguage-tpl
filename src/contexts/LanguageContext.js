// LanguageContext.js

import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children, defaultLanguage }) => {
  // Set up state to store the selected language and translations
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage || 'en'); // Use the defaultLanguage prop if provided, or default to 'en'

  // Create an object with translations
  const [translations, setTranslations] = useState({
    en: {
      greeting: 'Hello!',
      farewell: 'Goodbye!',
    },
    fr: {
      greeting: 'Bonjour!',
      farewell: 'Au revoir!',
    },
  });

  // Function to update translations
  const updateTranslations = (newTranslations) => {
    setTranslations((prevTranslations) => {
      const updatedTranslations = { ...prevTranslations };

      // Iterate over the newTranslations object and update each language's translations
      for (const language in newTranslations) {
        if (newTranslations.hasOwnProperty(language)) {
          updatedTranslations[language] = {
            ...(prevTranslations[language] || {}), // Keep existing translations
            ...newTranslations[language], // Add/update translations
          };
        }
      }

      return updatedTranslations;
    });
  };

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage, translations, setSelectedLanguage, updateTranslations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
