import React from 'react';
import { Link } from 'react-router-dom';

interface CategorieslistProps {
  open: boolean;
}

function CategoriesList({ open }: CategorieslistProps) {
  return (
    <ul className={open ? 'categoriesListOpen' : 'categoriesListClose'}>
      <li className="categoriesOpen__element">
        <h6>Мужчинам</h6>
        <Link to="/catalog/man/sneakers">Обувь</Link>
        <Link to="/catalog/man/clothes">Одежда</Link>
        <Link to="/catalog/man/accessories">Акссесуары</Link>
      </li>
      <li className="categoriesOpen__element">
        <h6>Девушкам</h6>
        <Link to="/catalog/woman/sneakers">Обувь</Link>
        <Link to="/catalog/woman/clothes">Одежда</Link>
        <Link to="/catalog/woman/accessories">Акссесуары</Link>
      </li>
      <li className="categoriesOpen__element">
        <h6>Детям</h6>
        <Link to="/catalog/kits/sneakers">Обувь</Link>
        <Link to="/catalog/kits/clothes">Одежда</Link>
      </li>
    </ul>
  );
}

export default CategoriesList;
