import { CollectionPageContainer, CollectionTitle, Items } from './Collection.styles'

import CollectionItem from "../../components/collection-item/CollectionItem";
import React from "react";
import { useSelector } from "react-redux";

const CollectionPage = ({ match }) => {
  const selectedCollection = useSelector(
    (state) => state.shop.collections[match.params.collectionId]
  );
  const { title, items } = selectedCollection;
  return (
    <CollectionPageContainer >
      <CollectionTitle>{title}</CollectionTitle>
      <Items>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
