// libries
import React from 'react';
// components
import Categories from './Categories';
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="header">
      <Logo type="full" size="large" />
      <Categories />
      <Navigation />
    </header>
  );
}

export default Header;
