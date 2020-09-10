import React from 'react';
import { useLanguage } from '../shared/providers/Language';

const FormatMessage = (props) => {
  const { id, defaultMessage = id, params } = props;

  const { getMessage, message } = useLanguage();
  const text = getMessage(id, message, params, defaultMessage);

  return text;
};

export default FormatMessage;
