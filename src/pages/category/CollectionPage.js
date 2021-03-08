import "./CollectionPage.scss";

import CollectionItem from "../../components/collection-item/CollectionItem";
import React from "react";
import { useSelector } from "react-redux";

const COLLECTION_ID = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  women: 4,
  men: 5,
};
const CollectionPage = ({ match }) => {
  const selectedCollection = useSelector(
    (state) => state.shop.collections[match.params.collectionId]
  );
  const { title, items } = selectedCollection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
