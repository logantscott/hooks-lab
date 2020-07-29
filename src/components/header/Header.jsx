import React from 'react';
import styles from './Header.css';

const Header = () => (
  <header className={styles.Header}>
    <h1><a href="/">Avatar API</a></h1>
    <ul>
      <li><a href='/'>Home</a></li>
      <li><a href='/characters'>Characters</a></li>
    </ul>
  </header>
);

export default Header;
