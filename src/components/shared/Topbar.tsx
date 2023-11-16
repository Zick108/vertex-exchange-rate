import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <section className="topbar">
      <div className="flex-between px-4 py-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/vertex_logo.svg"
            alt="logo"
            width={120}
            height={325}
          />
        </Link>
      </div>
    </section>
  );
};

export default Topbar;
