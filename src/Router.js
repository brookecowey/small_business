import React from 'react'
import { Routes, Route } from 'react-router'
import Listing from './Containers/Listing'
import Details from './Containers/Details'
import NewListing from './Containers/NewListing'

const Router = () => {
  return (
      <Routes>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/" element={<Listing />} />
          <Route path="/business/:id" element={<Details />} />
          <Route path="/add" element={<NewListing />} />
          {/* <Route path="/dashboard" component={Dashboard} />
          <Route path="/import" element={<Import/>} /> */}
      </Routes>
  );
};

export default Router;