import React from 'react';

import zh_CN from '../../locales/zh-CN';
import en_US from '../../locales/en-US';

const StateContext = React.createContext({});
const DispatchContext = React.createContext({});

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = React.useState('en-US');
  const supportLang = {
    'zh-CN': {
      name: '中文',
    },
    'en-US': {
      name: 'English',
    },
  };
  const messages = {
    'zh-CN': zh_CN,
    'en-US': en_US,
  };

  const message = React.useMemo(() => {
    return messages[lang];
  });

  const toogleLang = (lang) => {
    if (Object.keys(supportLang).indexOf(lang) > -1) {
      setLang(lang);
    }
  };

  const getMessage = (id, message, params, defaultMessage) => {
    let text = message[id];
    if (text) {
      return text;
    }
    id.split('.').forEach((key) => {
      text = text ? text[key] : message[key];
    });
    if (!text) {
      text = defaultMessage || id;
    }

    // 判断是否包含{.}
    if (!/{[^}]+}/g.test(text)) {
      return text;
    }

    // 使用传入的参数[params]替换{.}
    const strs = text.split(/{[^}]+}/g);
    const keys = text.match(/{[^}]+}/g);
    const returns = [];
    let i = 0;
    strs.forEach((str, index) => {
      if (str !== '') {
        returns.push(str);
      }

      if (index === strs.length - 1) {
        return;
      }
      const key = keys[i++].replace(/{|}/g, '');

      const element = params[key];
      // 是react元素和字符串的时候才会处理
      if (React.isValidElement(element)) {
        returns.push(
          React.cloneElement(element, {
            key: index,
          })
        );
      } else if (['string', 'number', 'boolean'].indexOf(typeof element) > -1) {
        returns.push(String(element));
      } else {
        returns.push('');
      }
    });
    return returns;
  };

  const getLocaleMessage = (id, params, defaultMessage) => {
    return getMessage(id, message, params, defaultMessage);
  };

  return (
    <StateContext.Provider value={{ lang, supportLang, messages, message }}>
      <DispatchContext.Provider
        value={{ toogleLang, getMessage, getLocaleMessage }}
      >
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

const useLanguage = () => {
  const { lang, supportLang, message, messages } = React.useContext(
    StateContext
  );
  const { toogleLang, getMessage, getLocaleMessage } = React.useContext(
    DispatchContext
  );

  return {
    lang,
    supportLang,
    message,
    messages,
    toogleLang,
    getMessage,
    getLocaleMessage,
  };
};

export { LanguageProvider, useLanguage };
