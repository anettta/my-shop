import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CollectionsOverview from "../../components/collections-overview.js";
import { selectCollections } from "../../redux/shop-selectors.js";
import CollectionPage from "../collection/collection.js";

const ShopPage = () => (
  <div className="shop-page">
    <Routes>
      <Route exact path="/" element={<CollectionsOverview />}></Route>
      <Route path="/:collectionId" element={<CollectionPage />}></Route>
    </Routes>
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
