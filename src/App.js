// App.js

import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Greeting from './components/Greeting';
import OtherComponent from './components/OtherComponent';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <LanguageProvider defaultLanguage="fr">
      <div className="App">
        This demo shows how easy is react multilanguaging
        See how there are strings from language provider, but also OtherComponent can always add or update language
        strings
      <Greeting />
      <OtherComponent />
      <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;
