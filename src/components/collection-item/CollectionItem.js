import {
  AddButton,
  CollectionFooterContainer,
  CollectionFooterName,
  CollectionFooterPrice,
  CollectionItemContainer,
  ImageContainer,
} from "./CollectionItem.styles";

import { addItem } from "../../redux/actions/cart/cart.actions";
import { useDispatch } from "react-redux";

const CollectionItem = (props) => {
  const dispatch = useDispatch();
  const { item } = props;
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <CollectionFooterName>{name}</CollectionFooterName>
        <CollectionFooterPrice>{price}</CollectionFooterPrice>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => dispatch(addItem(item))}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
