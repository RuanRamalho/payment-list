import React from 'react';
import breadCrumbsNormal from './images/breadCrumbs.svg';
import breadCrumbsFull from './images/breadCrumbsFull.svg';

const BreadCrumbs = ({ full }) => (
  <div className="container">
    <div className="row d-none d-lg-block">
      <div className="col-12 d-flex justify-content-center mb-5">
        <img
          src={full ? breadCrumbsFull : breadCrumbsNormal}
          alt="Bread Crumbs"
        />
      </div>
    </div>
  </div>
);

export default BreadCrumbs;
