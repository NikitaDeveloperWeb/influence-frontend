import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

interface CategoriesButtonProps {
  open: boolean;
  onClick: any;
}

function CategoriesButton({ open, onClick }: CategoriesButtonProps) {
  return (
    <>
      <div className="categoriesButton" onClick={onClick}>
        <div
          className="categoriesButton__icon"
          style={
            open
              ? {
                  transform: 'rotate(180deg)',
                  transition: '0.5s',
                  // transitionTimingFunction: 'linear',
                }
              : { transform: 'rotate(360deg)', transition: '0.5s' }
          }>
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </>
  );
}

export default CategoriesButton;
