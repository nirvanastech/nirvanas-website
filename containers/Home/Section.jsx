import React from 'react';

import { useLanguage } from '../../shared/providers/Language';

const Section = {
  one: () => {
    const { messages, lang } = useLanguage();
    const section = messages[lang].home.sections[0];

    return (
      <section id="one" className="wrapper">
        <div className="inner">
          <header className="align-center">
            <h2>{section.title}</h2>
          </header>
          <div className="flex flex-2">
            {section.content.map((content, index) => (
              <article key={index}>
                <header>
                  <h3>{content.title}</h3>
                </header>
                <p>
                  {content.desc.map((desc, index) => (
                    <React.Fragment key={index}>
                      {desc}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  },
  two: () => {
    const { messages, lang } = useLanguage();
    const section = messages[lang].home.sections[1];

    return (
      <section id="two" className="wrapper style1 special">
        <div className="inner">
          <header>
            <h2>{section.title}</h2>
          </header>
          <div className="flex flex-4">
            <div className="box person">
              <a className="icon fa-cc-diners-club"></a>
              <h3>{section.content[0]}</h3>
            </div>
            <div className="box person">
              <a className="icon fa-legal"></a>
              <h3>{section.content[1]}</h3>
            </div>
            <div className="box person">
              <a className="icon fa-wrench"></a>
              <h3>{section.content[2]}</h3>
            </div>
            <div className="box person">
              <a className="icon fa-key"></a>
              <h3>{section.content[3]}</h3>
            </div>
            <style jsx>{`
              a {
                color: white;
                font-size: 4em;
              }
            `}</style>
          </div>
        </div>
      </section>
    );
  },
  three: () => {
    const { messages, lang } = useLanguage();
    const section = messages[lang].home.sections[2];

    return (
      <section id="three" className="wrapper">
        <div className="inner">
          <header className="align-center">
            <h2>{section.title}</h2>
          </header>
          <div className="align-center">
            <img
              style={{ width: '100%', maxWidth: 722 }}
              src="/images/partner.png"
            />
          </div>
        </div>
      </section>
    );
  },
  four: () => {
    const { messages, lang } = useLanguage();
    const section = messages[lang].home.sections[3];

    return (
      <section id="three" className="wrapper">
        <div className="inner">
          <header className="align-center">
            <h2>{section.title}</h2>
          </header>
          <div className="align-center">
            <img
              style={{ width: '100%', maxWidth: 926 }}
              src="/images/roadmap.png"
            />
          </div>
        </div>
      </section>
    );
  },
};

export default Section;
