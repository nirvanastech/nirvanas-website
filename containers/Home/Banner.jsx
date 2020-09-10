import React from 'react';

import FormatMessage from '../../components/FormatMessage';

export default function Banner() {
  return (
    <section id="banner">
      <h1>
        <FormatMessage id="home.title" />
      </h1>
      <p>
        <FormatMessage id="home.intro" />
      </p>
      <style jsx>{`
        #banner {
          position: relative;
          padding: 16em 2em 14em 2em;
          background-image: url('/images/banner.jpg');
          background-size: cover;
          background-position: top;
          background-attachment: fixed;
          background-repeat: no-repeat;
          text-align: center;
          border-top: 0.5em solid #6cc091;
        }

        #banner::after {
          content: '';
          background: rgba(75, 75, 93, 0.85);
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        #banner h1 {
          z-index: 2;
          position: relative;
          font-size: 3.5em;
          font-weight: 100;
          color: #fff;
          line-height: 1em;
          margin: 0 0 0.5em 0;
          padding: 0;
        }

        #banner p {
          z-index: 2;
          position: relative;
          font-size: 1em;
          color: rgba(255, 255, 255, 0.55);
          margin-bottom: 1.75em;
          line-height: 1.5;
        }

        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
          #banner {
            background-attachment: scroll;
          }
        }

        @media screen and (max-width: 1280px) {
          #banner {
            padding: 10em 2em 8em 2em;
          }
        }

        @media screen and (max-width: 980px) {
          #banner {
            background-attachment: scroll;
          }
        }

        @media screen and (max-width: 736px) {
          #banner {
            padding: 8em 1.5em 6em 1.5em;
          }

          #banner h1 {
            font-size: 2.5em;
          }

          #banner p {
            font-size: 0.9em;
          }
        }

        @media screen and (max-width: 480px) {
          #banner {
            padding: 6em 1.5em 4em 1.5em;
          }
        }
      `}</style>
    </section>
  );
}
