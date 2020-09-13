import React from 'react';
import config from '../../config';

export default function PageFooter() {
  return (
    <footer id="footer">
      <ul className="copyright">
        <li>&copy; {config.authorName}</li>
        <li>
          Photography: <a href="https://www.ryantyko.com">Ryan Ko</a>
        </li>
      </ul>
    </footer>
  );
}
