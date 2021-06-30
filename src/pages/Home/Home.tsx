import React from 'react';
import Banner from './components/Banner';
import Hits from './components/Hits';

function Home() {
  const BANNERS = [
    {
      src: 'https://s3.amazonaws.com/images.ecwid.com/images/17763241/1118709650.jpg',
      path: '/catalog/man/clothes',
    },
    {
      src: 'https://redsneaker.ru/components/com_jshopping/files/img_products/10443/nike-air-max-270-10443-1.jpg',
      path: '/catalog/man/clothes',
    },
    {
      src: 'https://images.ru.prom.st/831886929_w700_h500_nike-krossovki-nike.jpg',
      path: '/catalog/man/clothes',
    },
  ];

  return (
    <div className="home">
      <Banner banners={BANNERS} />
      <Hits />
    </div>
  );
}

export default Home;
