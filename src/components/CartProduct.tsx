import React from 'react';
import { Link } from 'react-router-dom';
import BookmarkIcon from '@material-ui/icons/Bookmark';
interface CartProductProps {
  id: string;
  title: string;
  images: { src: string; alt: string }[];
  price?: number;
  hit: boolean;
  bookmarks: boolean;
}

function CartProduct({ title, images, id, price, hit, bookmarks }: CartProductProps) {
  const [active, setActive] = React.useState(0);

  const handleActiveNext = () => {
    setActive(1);
  };
  const returnActiveNext = () => {
    setActive(0);
  };

  const [activeBook, setActiveBook] = React.useState<Boolean>(bookmarks);
  // eslint-disable-next-line array-callback-return
  const handleSetActiveBook = (activeBook: Boolean) => {
    setActiveBook(!activeBook);
  };

  return (
    <div className="cartProduct">
      <div className="cartProduct__hit">
        <BookmarkIcon
          className={activeBook ? 'active' : ''}
          onClick={() => handleSetActiveBook(activeBook)}
        />
        {hit && <p>ХИТ</p>}
      </div>

      <Link
        to={`/product/${id}`}
        className="cartProduct__images"
        onMouseOver={() => handleActiveNext()}
        onMouseOut={() => returnActiveNext()}>
        {(images[active].src !== '' && (
          <img src={images[active].src} alt={images[active].alt} />
        )) || (
          <img
            src="https://bsm-rus.ru/image/cache/catalog/prod-img/sunstar-s7300n156gutbst-1200x800.jpg"
            alt=""
          />
        )}
      </Link>
      <div className="cartProduct__info">
        <div className="cartProduct__info__title">{title}</div>
        {price && <p className="cartProduct__info__price">{price} руб.</p>}
      </div>
      <div className="cartProduct__button">В корзину</div>
    </div>
  );
}
export default CartProduct;
