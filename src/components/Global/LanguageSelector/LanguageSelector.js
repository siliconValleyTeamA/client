/* External dependencies */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import cookie from 'react-cookies';

/* Internal dependencies */
import styles from './LanguageSelector.module.scss';
import { googleTranslate } from 'api/translateAPI';

const cx = classNames.bind(styles);
const languageList = [
  { language: 'ko', name: 'Korean' },
  { language: 'en', name: 'English' },
  { language: 'fr', name: 'French' },
];

function LanguageSelector(params) {
  const [languageCodes, setLanguageCodes] = useState(languageList);
  const [language, setLanguage] = useState('ko');
  const [question, setQuestion] = useState('🤖 선호하는 언어를 설정해주세요!');

  useEffect(() => {
    setLanguage(
      cookie.load('language')
        ? cookie.load('language')
        : navigator.language.split('-')[0],
    );
    googleTranslate.translate(question, language, function (err, translation) {
      setQuestion(translation.translatedText);
    });
  });

  const storeInCookie = e => {
    cookie.save('language', e.target.value);
    setLanguage(e.target.value);
  };

  return (
    <div className={cx('language-selector')}>
      <p>{question}</p>
      <select
        className={cx('language-list')}
        value={language}
        onChange={e => {
          storeInCookie(e);
        }}
      >
        {languageCodes.map(lang => (
          <option key={lang.language} value={lang.language}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
