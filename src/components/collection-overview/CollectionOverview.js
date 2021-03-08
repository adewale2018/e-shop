import "./CollectionOverview.scss";

import CollectionPreview from "../collection-preview/CollectionPreview";
import React from "react";
import { useSelector } from "react-redux";

const CollectionOverview = () => {
  const collections = useSelector((state) => state.shop.collections);
  const newCollections = Object.keys(collections).map(
    (key) => collections[key]
  );
  return (
    <div className="collections-overview">
      {newCollections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
