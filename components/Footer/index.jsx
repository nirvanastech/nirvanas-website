import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="inner">
        <div className="flex">
          <div className="copyright">
            Copyright &copy; 2020 Telos Foundation All rights reserved
          </div>
          <ul className="icons">
            <li>
              <a
                href=""
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        #footer .inner {
          border-top: 1px solid #dbdbdb;
          padding-top: 3em;
        }

        #footer .copyright {
          color: #bbb;
          font-size: 0.8em;
          margin: 0 0 2em 0;
          padding: 0;
        }

        #footer .copyright a {
          color: #bbb;
          text-decoration: none;
        }

        #footer .copyright a:hover {
          color: #bbb;
          text-decoration: underline;
        }

        #footer ul.icons li .icon {
          font-size: 0.58em;
        }

        @media screen and (max-width: 736px) {
          #footer .inner {
            padding-top: 2em;
          }

          #footer .copyright {
            order: 2;
          }

          #footer ul {
            order: 1;
          }

          #footer .flex {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
