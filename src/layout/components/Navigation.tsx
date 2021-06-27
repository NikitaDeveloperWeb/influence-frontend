import React from 'react';
import { Link } from 'react-router-dom';
// icons
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BookmarkIcon from '@material-ui/icons/Bookmark';

function Navigation() {
  const thisUrl = window.location.pathname;

  return (
    <nav className="navigation">
      <Link to="/signin">
        <PersonIcon className={thisUrl === '/signin' ? 'active' : ''} />
      </Link>
      <Link to="/cart">
        <ShoppingCartIcon className={thisUrl === '/cart' ? 'active' : ''} />
      </Link>
      <Link to="/bookmarks">
        <BookmarkIcon className={thisUrl === '/bookmarks' ? 'active' : ''} />
      </Link>
    </nav>
  );
}

export default Navigation;
