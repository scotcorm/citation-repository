import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul className='footer_licenses'>
        <li>
          <Link to='citations/licenses/:CC0'>CC 0</Link>
        </li>
        <li>
          <Link to='citations/licenses/:CCBY'>CC BY 4.0</Link>
        </li>
        <li>
          <Link to='citations/licenses/:CCBYSA'>CC BY-SA 4.0</Link>
        </li>
        <li>
          <Link to='citations/licenses/:CCBYNC'>CC BY-NC 4.0</Link>
        </li>
        <li>
          <Link to='citations/licenses/:CCBYNCSA'>CC BY-NC-SA 4.0</Link>
        </li>
        <li>
          <Link to='citations/licenses/:CCBYND'>CC BY-ND 4.0</Link>
        </li>
        <li>
          <Link to='citations/licenses/:CCBYNCND'>CC BY-NC-ND 4.0</Link>
        </li>
        <li>
          <a
            href='https://creativecommons.org/share-your-work/cclicenses/'
            target='_blank'
          >
            About CC Licenses
          </a>
        </li>
      </ul>
      <hr></hr>
      <div className='footer_copyright'>
        <a
          href='https://creativecommons.org/licenses/by-nc-sa/4.0/'
          target='_blank'
        >
          Some Rights Reserved: This site is licensed CC BY-NC-SA 4.0
        </a>
      </div>
    </footer>
  );
};

export default Footer;
