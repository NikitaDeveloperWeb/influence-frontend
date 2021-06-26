import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size: 'large' | 'medium' | 'small';
  type: 'full' | 'mini';
}

function Logo({ size, type }: LogoProps) {
  return (
    <>
      {(type === 'full' && size === 'large' && (
        <Link to="/" className="logo lg full">
          InFluence
        </Link>
      )) ||
        (type === 'full' && size === 'medium' && (
          <Link to="/" className="logo md full">
            InFluence
          </Link>
        )) ||
        (type === 'full' && size === 'small' && (
          <Link to="/" className="logo sm full">
            InFluence
          </Link>
        )) ||
        (type === 'mini' && size === 'large' && (
          <Link to="/" className="logo lg mimi">
            IF
          </Link>
        )) ||
        (type === 'mini' && size === 'medium' && (
          <Link to="/" className="logo lg mini">
            IF
          </Link>
        )) ||
        (type === 'mini' && size === 'small' && (
          <Link to="/" className="logo lg mini">
            IF
          </Link>
        ))}
    </>
  );
}

export default Logo;
