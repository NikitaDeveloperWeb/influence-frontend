// libries
import React from 'react';
import Header from './components/Header';

interface LayoutProps {
  page?: JSX.Element | JSX.Element[] | Element | Element[];
}

function Layout({ page }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <div className="layout__content">{page}</div>
    </div>
  );
}

export default Layout;
