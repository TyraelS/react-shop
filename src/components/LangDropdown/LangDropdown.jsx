import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'LangSwitch';
const propTypes = {
  currentLanguage: PropTypes.string.isRequired
};

const langList = ['english', 'russian', 'ukrainian'];

export default function LangSwitch({ currentLanguage }) {
  return (
    <select value={currentLanguage}>
      {langList.map((item, i) => {
        // eslint-disable-next-line react/no-array-index-key
        return <option key={i}>{item}</option>;
      })}
    </select>
  );
}

LangSwitch.displayName = displayName;
LangSwitch.propTypes = propTypes;
