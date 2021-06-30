import React from 'react';
import { Link } from 'react-router-dom';
import CartProduct from '../../../components/CartProduct';

function Hits() {
  const HITS = [
    {
      id: '0',
      images: [
        { src: 'https://crossdiscount.com/images/detailed/3/sapato-350_3950.jpg', alt: '' },
        { src: 'https://img0.st.kloomba.com/img/used/2015/09/14/12/b/16097745_9.jpg', alt: '' },
      ],
      title: 'Nike AirMax',
      hit: true,
      price: 8000,
    },
    {
      id: '1',
      images: [
        { src: '', alt: '' },
        { src: '', alt: '' },
      ],
      hit: false,
      title: 'Nike AirMax',
      price: 8000,
    },
    {
      id: '2',
      images: [
        { src: 'https://crossdiscount.com/images/detailed/3/sapato-350_3950.jpg', alt: '' },
        { src: 'https://img0.st.kloomba.com/img/used/2015/09/14/12/b/16097745_9.jpg', alt: '' },
      ],
      title: 'Nike AirMax',
      hit: true,
      price: 8000,
    },
    {
      id: '3',
      images: [
        { src: '', alt: '' },
        { src: '', alt: '' },
      ],
      hit: false,
      title: 'Nike AirMax',
      price: 8000,
    },
    {
      id: '4',
      images: [
        { src: 'https://crossdiscount.com/images/detailed/3/sapato-350_3950.jpg', alt: '' },
        { src: 'https://img0.st.kloomba.com/img/used/2015/09/14/12/b/16097745_9.jpg', alt: '' },
      ],
      title: 'Nike AirMax',
      hit: true,
      price: 8000,
    },
    {
      id: '5',
      images: [
        { src: '', alt: '' },
        { src: '', alt: '' },
      ],
      hit: false,
      title: 'Nike AirMax',
      price: 8000,
    },
    {
      id: '6',
      images: [
        { src: 'https://crossdiscount.com/images/detailed/3/sapato-350_3950.jpg', alt: '' },
        { src: 'https://img0.st.kloomba.com/img/used/2015/09/14/12/b/16097745_9.jpg', alt: '' },
      ],
      title: 'Nike AirMax',
      hit: true,
      price: 8000,
    },
    {
      id: '7',
      images: [
        { src: '', alt: '' },
        { src: '', alt: '' },
      ],
      hit: false,
      title: 'Nike AirMax',
      price: 8000,
    },
  ];
  const BOOKMARKS = ['0', '2'];
  return (
    <div className="hits">
      <h1>Хиты продаж</h1>
      <ul>
        {HITS.map((hit) => (
          <li key={`${hit.id}`}>
            <CartProduct
              id={hit.id}
              images={hit.images}
              title={hit.title}
              price={hit.price}
              hit={hit.hit}
              bookmarks={BOOKMARKS.indexOf(hit.id) !== -1 ? true:false}
            />
          </li>
        ))}
      </ul>
      <Link to="/catalog">Перейти в каталог...</Link>
    </div>
  );
}

export default Hits;
