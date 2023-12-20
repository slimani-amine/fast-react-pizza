import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LinkButton({ children, to }) {
  const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';
  const navigate = useNavigate();
  if (to === '-1') {
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }

  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}
