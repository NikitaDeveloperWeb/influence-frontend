import React from 'react';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Link } from 'react-router-dom';
interface BannerProps {
  banners: {
    src: string;
    path: string;
  }[];
}

function Banner({ banners }: BannerProps) {
  const BANNERS = banners;

  const [active, setActive] = React.useState(0);

  const handlerActiveIncrement = (thisBanner: number) => {
    if (thisBanner < BANNERS.length) {
      let nextBanner = thisBanner + 1;
      if (nextBanner < BANNERS.length) {
        setActive(nextBanner);
      } else {
        setActive(0);
      }
    }
  };
  const handlerActiveDecrement = (thisBanner: number) => {
    if (thisBanner >= 0) {
      let nextBanner = thisBanner - 1;
      if (nextBanner >= 0) {
        setActive(nextBanner);
      } else {
        setActive(BANNERS.length - 1);
      }
    }
  };
  let BG = BANNERS[active].src;
  let count = 0;
  if (count < 3) {
    setTimeout(() => handlerActiveIncrement(active), 3000);
    count++;
  } else {
    count = 0;
  }
  return (
    <div className="banner">
      <KeyboardArrowRightIcon
        style={{ transform: 'rotate(180deg)' }}
        onClick={() => {
          handlerActiveDecrement(active);
        }}
      />
      <Link
        to={BANNERS[active].path}
        style={{
          background: `url(${BG})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}>
        <div className="steps">
          <div className={active === 0 ? 'steps__curcle_active' : 'steps__curcle'}></div>
          <div className={active === 1 ? 'steps__curcle_active' : 'steps__curcle'}></div>
          <div className={active === 2 ? 'steps__curcle_active' : 'steps__curcle'}></div>
        </div>
      </Link>
      <KeyboardArrowRightIcon
        onClick={() => {
          handlerActiveIncrement(active);
        }}
      />
    </div>
  );
}

export default Banner;
