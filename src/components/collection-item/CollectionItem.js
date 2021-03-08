import "./CollectionItem.scss";

import CustomButton from "../custom-button/CustomButton";
import { addItem } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";

const CollectionItem = (props) => {
  const dispatch = useDispatch();
  const { item } = props;
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addItem(item))}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
