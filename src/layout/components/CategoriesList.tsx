import React from 'react';
import { Link } from 'react-router-dom';

interface CategorieslistProps {
  open: boolean;
}

function CategoriesList({ open }: CategorieslistProps) {
  const MAN_LIST = [
    { path: '/catalog/man/sneakers', title: 'Обувь' },
    { path: '/catalog/man/clothes', title: 'Одежда' },
    { path: '/catalog/man/accessories', title: 'Акссесуары' },
  ];
  const WOMAN_LIST = [
    { path: '/catalog/woman/sneakers', title: 'Обувь' },
    { path: '/catalog/woman/clothes', title: 'Одежда' },
    { path: '/catalog/woman/accessories', title: 'Акссесуары' },
  ];
  const ANSWER_LIST = [{ path: '/catalog/answer/book', title: 'Книги' }];

  const thisUrl = window.location.pathname;
  return (
    <ul className={open ? 'categoriesListOpen' : 'categoriesListClose'}>
      <li className="categoriesOpen__element">
        <h6>Мужчинам</h6>
        {MAN_LIST.map((man, index) => (
          <React.Fragment key={`${man.title}+${index}`}>
            <Link to={man.path} className={thisUrl === man.path ? 'active' : ''}>
              {man.title}
            </Link>
          </React.Fragment>
        ))}
      </li>
      <li className="categoriesOpen__element">
        <h6>Девушкам</h6>
        {WOMAN_LIST.map((woman, index) => (
          <React.Fragment key={`${woman.title}+${index}`}>
            <Link to={woman.path} className={thisUrl === woman.path ? 'active' : ''}>
              {woman.title}
            </Link>
          </React.Fragment>
        ))}
      </li>
      <li className="categoriesOpen__element">
        <h6>Другое</h6>
        {ANSWER_LIST.map((answer, index) => (
          <React.Fragment key={`${answer.title}+${index}`}>
            <Link to={answer.path} className={thisUrl === answer.path ? 'active' : ''}>
              {answer.title}
            </Link>
          </React.Fragment>
        ))}
      </li>
    </ul>
  );
}

export default CategoriesList;
