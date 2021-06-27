// libries
import React from 'react';
// components
import CategoriesButton from './CategoriesButton';
import CategoriesList from './CategoriesList';
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  const [open, setOpen] = React.useState(false);

  const handlerOpen = (state: boolean) => {
    setOpen(!state);
  };

  return (
    <>
      <header className="header">
        <div className="header__up">
          <Logo type="full" size="large" />
          <CategoriesButton open={open} onClick={() => handlerOpen(open)} />
          <Navigation />
        </div>
        <CategoriesList open={open} />
      </header>
    </>
  );
}

export default Header;
